"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let appId = "abc";
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return 0;
}
function clickHandler(message) {
    // let userName = "Max"
    console.log("Clicked" + message);
}
console.log(appId);
console.log(add(5, 3));
// a comment
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}
//# sourceMappingURL=option.js.map