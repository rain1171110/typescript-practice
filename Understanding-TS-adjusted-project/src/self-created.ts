interface validatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: validatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
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
  @Required
  title: string;
  @Required
  description: string;
  @PositiveNumber
  people: number;

  constructor(t: string, d: string, p: number) {
    this.title = t;
    this.description = d;
    this.people = p;
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
  const descriptionEl = document.getElementById(
    "description",
  ) as HTMLTextAreaElement;
  const peopleEL = document.getElementById("people") as HTMLInputElement;

  const title = titleEl.value;
  const description = descriptionEl.value;
  const people = +peopleEL.value;

  const createdProject = new Project(title, description, people);

  if (!validate(createdProject)) {
    alert("正しく入力して下さい");
    return;
  }

  const importedProjectNode = document.importNode(
    projectSingleTemplate.content,
    true,
  );

  const projectItem = importedProjectNode.firstElementChild as HTMLElement;
  projectItem.querySelector("h2")!.textContent = createdProject.title;

  const paragraphs = projectItem.querySelectorAll("p");
  paragraphs[0]!.textContent = createdProject.description;
  paragraphs[1]!.textContent = `${createdProject.people}人日`;

  projectList.appendChild(projectItem);

  projectForm.reset();
});
