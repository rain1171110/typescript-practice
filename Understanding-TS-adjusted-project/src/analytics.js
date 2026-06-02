"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = "Max";
    console.log(logged);
}
sendAnalytics("The data");
//# sourceMappingURL=analytics.js.map