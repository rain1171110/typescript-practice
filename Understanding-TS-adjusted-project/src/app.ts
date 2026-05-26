class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = {name:"Dummy", describe: accounting.describe };

accountingCopy.describe();

// 練習問題
// class Animal {
//   type: string;

//   constructor(t: string) {
//     this.type = t;
//   }
// }

// const dog = new Animal("Dog");
// const cat = new Animal("Cat");

// console.log(dog);
// console.log(cat);
