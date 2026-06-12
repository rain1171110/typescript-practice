var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
const value = 42;
console.log(value);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Hello ", "TypeScript");
result.split(" ");
console.log(result);
console.log(add(2, 5));
const fetchedUserData = {
    id: "u1",
    name: "user1",
    job: {
        title: "Developer",
        description: "TypeScript",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
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
class Car {
    drive() {
        console.log("運転中...");
    }
}
class Truck {
    drive() {
        console.log("トラックを運転中...");
    }
    loadCargo(amount) {
        console.log("荷物を載せています..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "鳥":
            speed = animal.flyingSpeed;
            break;
        case "馬":
            speed = animal.runningSpeed;
    }
    console.log(`${animal.type}の移動速度:` + speed);
}
moveAnimal({ type: "鳥", flyingSpeed: 10 });
moveAnimal({ type: "馬", runningSpeed: 20 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "こんにちは";
}
console.log(userInputElement.value);
const errorBag = {
    email: "正しいメールアドレスではありません",
    username: "ユーザ名に記号を含めることはできません。",
};
console.log(errorBag);
export {};
//# sourceMappingURL=app.js.map