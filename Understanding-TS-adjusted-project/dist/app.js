var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validateInput) {
    let isValid = true;
    if (validateInput.required) {
        isValid = isValid && validateInput.value.toString().trim().length !== 0;
    }
    if (validateInput.minLength != null &&
        typeof validateInput.value === "string") {
        isValid =
            isValid && validateInput.value.length >= validateInput.minLength;
    }
    if (validateInput.maxLength != null &&
        typeof validateInput.value === "string") {
        isValid =
            isValid && validateInput.value.length <= validateInput.maxLength;
    }
    if (validateInput.min != null &&
        typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value >= validateInput.min;
    }
    if (validateInput.max != null &&
        typeof validateInput.value === "number") {
        isValid = isValid && validateInput.value <= validateInput.max;
    }
    return isValid;
}
function autoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, numOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((prj) => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = new ProjectState();
class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        projectState.addListener((projects) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement("li");
            listItem.textContent = prjItem.title;
            listItem.addEventListener("click", () => {
                projectState.moveProject(prjItem.id, this.type === "active"
                    ? ProjectStatus.Finished
                    : ProjectStatus.Active);
            });
            listEl.appendChild(listItem);
        }
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidate = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidate = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidate = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 1000,
        };
        if (!validate(titleValidate) ||
            !validate(descriptionValidate) ||
            !validate(peopleValidate)) {
            alert("入力値が正しくありません。再度お試しください。");
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
__decorate([
    autoBind
], ProjectInput.prototype, "submitHandler", null);
const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
export {};
//# sourceMappingURL=app.js.map