type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges:" + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });
