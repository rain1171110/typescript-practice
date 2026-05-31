class Department {
  // private readonly id = string;
  // name: string;
  private employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}:${this.name})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
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
