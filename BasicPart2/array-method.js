"use strict";
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`ARRAY  : ${fruits}`);
//Methods
let size = fruits.length;

let arrayToString = fruits.toString(); //convert arr to comman seperated value

//accessing the elemnts
let thirdFruitsElementType01 = fruits.at(2); //modern support negative index
let  thirdFruitsElementType02 = fruits[2];  // not supported negative index due to object property
let lastFruits = fruits.at(-1);

//join()
let joinArray = fruits.join('*');

//removing elements
let lastPoppedFruits = fruits.pop();  //last element
let lastShiftingElement = fruits.shift(); //first Elements

//adding elements
let lastPushFruits = fruits.push("Kiwi");
let lastUnShiftFruits = fruits.unshift("Lemon");

//changing Elements
fruits[0] = 'Mango'
// delete fruits[0]; //do not use it unsual behaior (not like python)


//merning Array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren02 = arr1.concat(arr2, arr3);

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren03 = arr1.concat("Peter"); 


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

//slice
const citrus = fruits.slice(1,3);

//printing
// console.log("Array Size  : "+size);
// console.log(arrayToString); 
// console.log("Third Elements using .at() : "+thirdFruitsElementType01);
// console.log('Third Elements using [] : '+thirdFruitsElementType02);

//negativing accessing
// console.log(`last Elements : ${lastFruits}`);
// console.log(`Last ELEMENTS : ${fruits[-1]}`); //give an undefined
// console.log('JOIN ARRAY : '+joinArray);

//ELEMENTS REDUCTION
// console.log(`POPPED ELEMENTS : ${lastPoppedFruits}`);
// console.log(`SHIFTED ELEMENTS : ${lastShiftingElement}`);

// console.log(`PUSHED ELEMENTS : ${lastPushFruits}`);
// console.log(`UNSHIFT ELEMENTS : ${lastUnShiftFruits}`);

// console.log(`FIRST ELEMET AFTER DELETE : ${fruits[0]}`) //define besacuse use undefine
// console.log(`'ARRAY' : ${fruits}`);




console.log(`MERGES ARRAY : ${myChildren}`);
console.log(`merge  THREE ARRAY : ${myChildren02}`);
console.log('merge  VALUES IN ARRAY :'+myChildren03);

console.log(myArr)
console.log(`AFTER THE FLAT() ${newArr}`);

console.log(citrus);