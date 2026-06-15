var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("constructor:", constructor);
        console.log("constructor.name:", constructor.name);
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        console.log("p:", p);
        console.log("p.name:", p.name);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Personオブジェクト作成中…");
    }
};
Person = __decorate([
    WithTemplate("<h1>Personオブジェクト</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
export {};
//# sourceMappingURL=app.js.map