"use strict";
// const userNme = "Max";
// // userNme = "Maximilian";
Object.defineProperty(exports, "__esModule", { value: true });
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// const add = (a: number, b: number) => {
//   return a + b;
// };
// console.log(add(2, 5));
// const add = (a: number = 5, b: number = 1) => a + b;
// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };
// printOutput(add());
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
    firstName: "Max",
    age: 30,
};
const copiedPerson = {
    ...person,
};
console.log(copiedPerson);
// if (age >= 20) {
//   let isAdult = true;
// }
// console.log(isAdult);
// console.log(result);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, remainingHobbies);
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=javaScript.js.map