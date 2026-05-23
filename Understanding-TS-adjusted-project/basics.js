function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number")
    //         throw new Error("入力値が間違っています");
    //     return n1 + n2;
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result:";
// resultPhrase = 0;
add(number1, number2, printResult, resultPhrase);
export {};
//# sourceMappingURL=basics.js.map