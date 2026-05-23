function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
    return result;
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(5, 12));
export {};
//# sourceMappingURL=functions.js.map