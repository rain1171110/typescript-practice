// const userNme = "Max";
// // userNme = "Maximilian";

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

const add = (a: number = 5, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add());

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

const hobbies = ["Sports","Cooking"];
const activeHobbies = ["Hiking",...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name:"Max",
  age:30,
};

const copiedPerson = {
  ...person,
};

console.log(copiedPerson)

// if (age >= 20) {
//   let isAdult = true;
// }

// console.log(isAdult);

// console.log(result);
