const add = (a = 5, b = 1) => a + b;
const printOutput = (output) => {
    console.log(output);
};
printOutput(add());
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    name: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
export {};
//# sourceMappingURL=app.js.map