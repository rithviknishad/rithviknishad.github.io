let runCode = () => {
  let console = {
    log: (val) => {
      let paragraph = document.getElementById("console-output");
      paragraph.appendChild(document.createTextNode(val));
      paragraph.appendChild(document.createElement("br"));
    },
  };

  ((me) => {
    console.log(`I am ${me.name}`);
    console.log(`My hobbies are ${me.hobbies.join(", ")}`);
    console.log(`I am currently pursuing my ${me.pursuing}`);
  })({
    name: `Rithvik Nishad`,
    hobbies: [`programming 🖥️`, `thinking 🧠`, `eating 🍲`, `sleeping 😴`],
    pursuing: `3rd year B. Tech. 
      Electrical & Electronics Engineering 
      @Vellore Institute of Technology, Chennai`,
  });
};

let code = `((me) => {
  console.log(\`I am \${me.name}\`);
  console.log(\`My hobbies are \${me.hobbies.join(", ")}\`);
  console.log(\`I am currently pursuing my \${me.pursuing}\`);
})({
  name: \`Rithvik Nishad\`,
  hobbies: [\`programming 🖥️\`, \`thinking 🧠\`, \`eating 🍲\`, \`sleeping 😴\`],
  pursuing: \`3rd year B. Tech. 
    Electrical & Electronics Engineering 
    @Vellore Institute of Technology, Chennai\`,
});`;

document.getElementById("highlighted-code").innerHTML = code;
