let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};

let frames = {
  backward: 6,
  block: 9,
  forward: 6,
  idle: 8,
  kick: 7,
  punch: 7,
};

let loadImages = (callback) => {
  let images = {};

  Object.keys(frames).forEach((animation) => {
    images[animation] ??= [];

    for (let i = 0; i < frames[animation]; ++i) {
      loadImage(
        `/martial-arts/images/${animation}/${i + 1}.png`,
        (img) => (images[animation][i] = img)
      );
    }
  });

  callback(images);
};

let animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });

  setTimeout(callback, images[animation].length * 100);
};

// loadImage(`/images/background.jpg`, (img) => (images[animation][i] = img));

loadImages((images) => {
  let queuedAnimations = [];

  let aux = () => {
    let selectedAnimation =
      queuedAnimations.length === 0 ? "idle" : queuedAnimations.shift();

    animate(ctx, images, selectedAnimation, aux);
  };

  aux();

  let actions = {
    Backward: "backward",
    Block: "block",
    Forward: "forward",
    Kick: "kick",
    Punch: "punch",
  };

  Object.values(actions).forEach(
    (action) =>
      (document.getElementById(action).onclick = () =>
        queuedAnimations.push(action))
  );

  const keyEventCallbacks = {
    k: () => queuedAnimations.push(actions.Kick),
    p: () => queuedAnimations.push(actions.Punch),
    " ": () => queuedAnimations.push(actions.Block),
    d: () => queuedAnimations.push(actions.Forward),
    a: () => queuedAnimations.push(actions.Backward),
  };

  document.addEventListener("keyup", (e) => keyEventCallbacks[e.key]?.());
});
