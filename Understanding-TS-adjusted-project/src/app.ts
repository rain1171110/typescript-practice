// const names: Array<string> = []; //string[]
// // names[0]?.split(" ");

// console.log(names);

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました");
//   }, 2000);
// });

// promise.then(data => {
//     data.split(" ");
// });

// console.log(promise);

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ name: "Max" }, { age: 30 });


console.log(mergedObj);
console.log(mergedObj2);
