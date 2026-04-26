"use strict";

let symbols_01 = Symbol("id");
let symbols_02 = Symbol("id");

console.log(`${symbols_01.toString()} : ${symbols_02.toString()} : `);

if (symbols_01 == symbols_02) {
    console.log("Equals");
} else {
    console.log("Not Equals");
}

let id = Symbol("id");
const studentRecord = {
    "name": "Dipu",
    "RollNum": 44,
    "id": 12,
    [id]: "UAN1234567890"
}

console.log("Symbols" + studentRecord[id]);
console.log("ID" + studentRecord["id"]);

//in looping the symbols are not display
//it life secret keys which is access via key
for(let keys in studentRecord){
    console.log(keys+" : "+studentRecord[keys])
}