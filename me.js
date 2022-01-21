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
