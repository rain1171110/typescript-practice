var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        const validators = objValidatorConfig[prop];
        if (!validators) {
            continue;
        }
        for (const validator of validators) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Project {
    constructor(t, d, p) {
        this.title = t;
        this.description = d;
        this.people = p;
    }
}
__decorate([
    Required
], Project.prototype, "title", void 0);
__decorate([
    Required
], Project.prototype, "description", void 0);
__decorate([
    PositiveNumber
], Project.prototype, "people", void 0);
const projectInputTemplate = document.getElementById("project-input");
const projectSingleTemplate = document.getElementById("single-project");
const projectListTemplate = document.getElementById("project-list");
const app = document.getElementById("app");
const importedInputNode = document.importNode(projectInputTemplate.content, true);
const importedListNode = document.importNode(projectListTemplate.content, true);
app.appendChild(importedInputNode);
app.appendChild(importedListNode);
const listTitle = document.querySelector(".projects h2");
listTitle.textContent = "有効なプロジェクト";
const projectList = document.querySelector(".projects ul");
const projectForm = document.querySelector("form");
projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const descriptionEl = document.getElementById("description");
    const peopleEL = document.getElementById("people");
    const title = titleEl.value;
    const description = descriptionEl.value;
    const people = +peopleEL.value;
    const createdProject = new Project(title, description, people);
    if (!validate(createdProject)) {
        alert("正しく入力して下さい");
        return;
    }
    const importedProjectNode = document.importNode(projectSingleTemplate.content, true);
    const projectItem = importedProjectNode.firstElementChild;
    projectItem.querySelector("h2").textContent = createdProject.title;
    const paragraphs = projectItem.querySelectorAll("p");
    paragraphs[0].textContent = createdProject.description;
    paragraphs[1].textContent = `${createdProject.people}人日`;
    projectList.appendChild(projectItem);
    projectForm.reset();
});
export {};
//# sourceMappingURL=self-created.js.map