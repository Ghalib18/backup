"use strict";
function print(message) {
    console.log(`hello  ${message}`);
}
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age >= 18) {
        return "person is reach the legal age";
    }
    else {
        return "person is not reach the leagal age";
    }
}
function delay(fn) {
    setTimeout(fn, 5000);
}
delay(() => {
    console.log("this message is delayed by 5 seconds");
});
print("ghalib");
console.log(sum(10, 20));
let str = isLegal(2);
console.log(str);
