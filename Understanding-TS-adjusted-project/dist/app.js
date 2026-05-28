class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department:" + this.name);
    }
    addEmployee(employee) {
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
accounting.name = "NEW NAME";
accounting.describe();
accounting.printEmployeeInformation();
export {};
//# sourceMappingURL=app.js.map