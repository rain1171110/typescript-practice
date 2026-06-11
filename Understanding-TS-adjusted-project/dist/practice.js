function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges:" + emp.startDate);
    }
}
printEmployeeInformation({ name: "Manu", startDate: new Date() });
export {};
//# sourceMappingURL=practice.js.map