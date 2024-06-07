"use strict";
// export function
//named export
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = exports.add = void 0;
function add(num1, num2) {
    console.log(num1 + num2);
}
exports.add = add;
//export variable
exports.myName = "Javeria Nigar";
//defaut export
var Fname = "Muhammad Haider Ali Khan";
exports.default = Fname;
