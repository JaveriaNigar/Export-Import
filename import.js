"use strict";
//import function
//named import
Object.defineProperty(exports, "__esModule", { value: true });
var export_1 = require("./export");
(0, export_1.add)(8, 8);
//import varible
var export_2 = require("./export");
console.log(export_2.myName);
//default export
var export_3 = require("./export");
console.log(export_3.default);
