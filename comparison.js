"use strict";

console.log("<!-------comparsion Operator---------->");

//best comparsion operator and method
let num_01 = 3;
let num_02 = 9;

let isNumGreaterThanNum02 = num_01 >  num_02;
let isNumGreaterThanEqualToNum02 = num_01 >=  num_02;
let isNumLessThanNum02 = num_01 < num_02;
let isNumLessThanEqualToNum02 = num_01 <=  num_02;
let isNumEqualToNum02 = num_01 == num_02;

console.log(`Greate Than : ${num_01} Greate Than (>) ${num_02} : Boolean Result :${isNumGreaterThanNum02}`);

console.log(`Less Than : ${num_01} Less Than (<) ${num_02} : Boolean Result : ${isNumLessThanNum02}`);

console.log(`GRETER THAN EQUAL TO : ${num_01} >= ${num_02} : Boolean Result : ${isNumGreaterThanEqualToNum02}`);

console.log(`LESS THAN EQUAL TO : ${num_01} <= ${num_02} : Boolean Result : ${isNumLessThanEqualToNum02}`);

console.log(`EQUAL T0  : ${num_01} == ${num_02} : Boolean Result : ${isNumEqualToNum02}`);

console.log("-------------------------------------")


console.log("<!-------STRING(NUMBER)-AUTO-CONVERSION-NUMBER---------->");

let string_num_01 = '3';
let string_num_02 = '4';

console.log(typeof(string_num_01));
console.log(`${string_num_01} : typeof ${typeof(string_num_01)}`);
console.log(`${string_num_02} : typeof ${typeof(string_num_02)}`);

console.log(`${string_num_01} > ${string_num_02} : RESULT ${string_num_01 > string_num_02}`);

console.log("-------------------------------------")

//while comparing the values  do not compare with different datatypes always use the same datatypes for the comparison
// because we do get the perdicatable result


//bad comparsion technique avoid such types of comparsion
// always remember the clean code concept

console.log("-------------------------------------")

let isNullGreaterThanzero = null > 0;
let isNullEqualToZero = null == 0;
let isNullGreaterEqualToZero = null >= 0;
let isNullLessThanZero = null < 0;
let isNullLessThanEqualToZero = null <= 0;

console.log(`${null}> ${0} : RESULT : ${isNullGreaterThanzero}`);
console.log(`${null}>= ${0} : RESULT : ${isNullGreaterEqualToZero}`);
console.log(`${null}< ${0} : RESULT : ${isNullLessThanZero}`);
console.log(`${null} <= ${0} : RESULT : ${isNullGreaterEqualToZero}`);
console.log(`${null} == ${0} : RESULT : ${isNullEqualToZero}`);
console.log("-------------------------------------");

let isUndefineGreaterThanZero = undefined > 0;
let isUndefineEqualToZero = undefined == 0;
let isUndefineGreaterThanEqualToZero = undefined >= 0;
let isUndefineLessThanZero = undefined < 0;
let isUndefineLessThanEqualToZero = undefined <= 0;


console.log(`${undefined}> ${0} : RESULT : ${isUndefineGreaterThanZero}`);
console.log(`${undefined}>= ${0} : RESULT : ${isUndefineGreaterThanEqualToZero}`);
console.log(`${undefined}< ${0} : RESULT : ${isUndefineLessThanZero}`);
console.log(`${undefined} <= ${0} : RESULT : ${isUndefineLessThanEqualToZero}`);
console.log(`${undefined} == ${0} : RESULT : ${isUndefineEqualToZero}`);
console.log("-------------------------------------")

// === not only check the values but also check with datatypes of the values