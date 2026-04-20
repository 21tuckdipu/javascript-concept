"use strict";
const score = 4
console.log(`Score : ${score}`);

const balance = new Number(100.7899);
console.log(`Balance : ${balance} : lenght of Balance = ${balance.toString().length}` );
console.log(`Balance : ${balance} : Fixed to length (2) = ${balance.toFixed(2)}` );

console.log(`Balance : ${balance} : Percision to 3 = ${balance.toPrecision(3)}`);

console.log("<!------------------------------------>")
// add commans to the digit based on the indian standards and defination
const hundred = 10000000;
console.log(`${hundred} convert to indian Curreny Format : ${hundred.toLocaleString("en-IN")}`); 

console.log("<!--------------------MathOperations---------------->");

console.log(Math);
console.log(`Math Absolute Function : ${Math.abs(-4)}`);
console.log(`Math Round Function : ${Math.round(4.6)}`);
console.log(`Math Ceil Function : ${Math.ceil(4.8)}`); //roundoff based on the higher oreder
console.log(`Math Floor Function : ${Math.floor(4.5)}`); // orderoff based on lower order

console.log("<!------------Math-Operation------------>");
console.log(` 7,8,9,4 : Minimum : ${Math.min(7,8,9,4)}`);
console.log(` 64,45,44,2,4 : Maxmium : ${Math.max(64,45,44,2,4)}`);
console.log("<!------------Math-Round------------>");

let rawRandomNum = Math.random();
let greaterThanZeroLessThan10 = rawRandomNum * 10;
console.log(`RandOm Num Raw : ${rawRandomNum}`);
console.log(`Greater Than Zero and Less Than 10 : ${greaterThanZeroLessThan10}`);

//using floor and celling with random Functions
console.log(`${greaterThanZeroLessThan10} : Ceil = ${Math.ceil(greaterThanZeroLessThan10)}`);
console.log(`${greaterThanZeroLessThan10} : Floor = ${Math.floor(greaterThanZeroLessThan10)}`);


//trick for using random function

const min = 10
const max  = 20
console.log((Math.floor(Math.random()*(max-min)+min)));


// for(let i = 0 ; i<10; i++){
//     console.log((Math.floor(Math.random()*(max-min)+min)));
// }






