class Project {
    constructor(t, d, m) {
        this.title = t;
        this.description = d;
        this.manday = m;
    }
}
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
    const descriptionEL = document.getElementById("description");
    const mandayEL = document.getElementById("manday");
    const title = titleEl.value;
    const description = descriptionEL.value;
    const manday = +mandayEL.value;
    const createdProject = new Project(title, description, manday);
    const importedProjectNode = document.importNode(projectSingleTemplate.content, true);
    const projectItem = importedProjectNode.firstElementChild;
    projectItem.textContent = createdProject.title;
    projectList.appendChild(projectItem);
});
export {};
//# sourceMappingURL=app.js.map