class Department {
  name: string;
  private employees :string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }

  addEmployee(employee:string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");


accounting.addEmployee("Max");
accounting.addEmployee("Mai");


// accounting.employees[2] = "Anna";
accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name:"Dummy", describe: accounting.describe };

// accountingCopy.describe();

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
