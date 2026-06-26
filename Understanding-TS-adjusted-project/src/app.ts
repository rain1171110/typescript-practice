class Project {
  title: string;
  description: string;
  manday: number;

  constructor(t: string, d: string, m: number) {
    this.title = t;
    this.description = d;
    this.manday = m;
  }
}

const projectInputTemplate = document.getElementById(
  "project-input",
) as HTMLTemplateElement;
const projectSingleTemplate = document.getElementById(
  "single-project",
) as HTMLTemplateElement;
const projectListTemplate = document.getElementById(
  "project-list",
) as HTMLTemplateElement;

const app = document.getElementById("app") as HTMLDivElement;

const importedInputNode = document.importNode(
  projectInputTemplate.content,
  true,
);

const importedListNode = document.importNode(projectListTemplate.content, true);

app.appendChild(importedInputNode);
app.appendChild(importedListNode);

const listTitle = document.querySelector(".projects h2")!;
listTitle.textContent = "有効なプロジェクト";
const projectList = document.querySelector(".projects ul")!;

const projectForm = document.querySelector("form")!;
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const descriptionEL = document.getElementById(
    "description",
  ) as HTMLTextAreaElement;
  const mandayEL = document.getElementById("manday") as HTMLInputElement;

  const title = titleEl.value;
  const description = descriptionEL.value;
  const manday = +mandayEL.value;

  const createdProject = new Project(title, description, manday);

  const importedProjectNode = document.importNode(
    projectSingleTemplate.content,
    true,
  );

  const projectItem = importedProjectNode.firstElementChild as HTMLElement;

  projectItem.textContent = createdProject.title;
  projectList.appendChild(projectItem);

  //   if (!validate(createdProject)) {
  //     alert("正しく入力して下さい");
  //     return;
  //   }
  //   console.log(createdProject);
});
