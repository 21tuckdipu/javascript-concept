"use strict";
const score = 4
//console.log(score);

const balance = new Number(100.7899);
//console.log(balance);
console.log(balance.toString().length);
//console.log(balance.toFixed(2));

//console.log(balance.toPrecision(3));

const hundred = 10000000
//console.log(hundred.toLocaleString('en-IN')); // add commans to the digit based on the indian standards and defination

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.8)); //roundoff based on the higher oreder
// console.log(Math.floor(4.5)); // orderoff based on lower order

// console.log(Math.min(7,8,9,4));
// console.log(Math.max(64,45,44,2,4));

// console.log((Math.random()*10)+1);
// console.log((Math.floor(Math.random()*10)+1));

//trick for using random function

const min = 10
const max  = 20
console.log(Math.random())
console.log((Math.floor(Math.random()*10)+min));


