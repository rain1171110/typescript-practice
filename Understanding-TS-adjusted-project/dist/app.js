var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("LOGGER ファクトリ");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE ファクトリ");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._args) {
                super();
                console.log("テンプレートを表示");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Personオブジェクト作成中…");
    }
};
Person = __decorate([
    Logger("ログ出力中"),
    WithTemplate("<h1>Personオブジェクト</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log("Property デコレータ");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor デコレータ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method デコレータ");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter デコレータ");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("不正な価格です- 0以下は設定できません");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product("Book", 100);
const p2 = new Product("Book2", 100);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "クリックしました";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
function Required() { }
function PositiveNumber() { }
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
});
export {};
//# sourceMappingURL=app.js.map