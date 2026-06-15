function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("constructor:", constructor);
    console.log("constructor.name:", constructor.name);

    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    console.log("p:", p);
    console.log("p.name:", p.name);

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("ログ出力中 -PERSON")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクト作成中…");
  }
}

const pers = new Person();

console.log(pers);
