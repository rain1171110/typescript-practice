"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    id;
    name;
    // private readonly id = string;
    // name: string;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}:${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    admins;
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Mai");
// it.employees[2] = "Anna";
// it.name = "NEW NAME";
it.describe();
it.printEmployeeInformation();
console.log(it);
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
//# sourceMappingURL=app.js.map