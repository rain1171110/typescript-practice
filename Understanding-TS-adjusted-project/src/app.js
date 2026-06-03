"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    id;
    name;
    static fiscalYear = 2020;
    // private readonly id = string;
    // name: string;
    employees = [];
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(Department.fiscalYear);
        // this.id = id;
        // this.name = n;
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
    describe() {
        console.log("IT部門 - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    reports;
    lastReport;
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("会計部門- ID: " + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Mai");
// it.employees[2] = "Anna";
// it.name = "NEW NAME";
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "通期会計レポート";
console.log(accounting.mostRecentReport);
accounting.addReport("Something");
accounting.addEmployee("Max");
accounting.addEmployee("Mai");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
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