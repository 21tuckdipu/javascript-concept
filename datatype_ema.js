"use strict"; // treat all js as newer verison
//alert('hello')  //we are using in nodejs not in broswers

//code readability should be consider
console.log(3+
    3
    );

console.log(3+3);
/*
primitive datetype
     datatype
       string datatype
         var
       number=> 2 to power 53
         bigint
      boolean=> true /false
      null => standalone value  representation of empty value;
         undefined =>  
      symbol => to find the uniqnueness 

//object


*/

let name = "Dipu";

let number = 1;
let float_number = 1.23;
let big_int_number = 1n;

let isFalseBoolean = false;
let isTrueBoolean = true;

let myArr = ['Apple',["Graphs","Banana"],'Mango'];
let myObj = {"city":"mumbai"};

let mySymbol = Symbol("dipuSymbol");

console.log(`${name} : ${typeof name}`);
console.log(`${float_number} : ${typeof float_number}`);

console.log(`${big_int_number} : ${typeof big_int_number}`);
console.log(`${null} : ${typeof null}`);     //object
console.log(`${undefined} : ${typeof undefined}`);  // undefined

//boolean
console.log(`${isFalseBoolean} : ${typeof isFalseBoolean}`);
console.log(`${isTrueBoolean} : ${typeof isTrueBoolean}`);

console.log(`${JSON.stringify(myArr)} : ${typeof myArr}`);
console.log(`${myArr.join("-")} : ${typeof myArr}`);
console.log(`${JSON.stringify(myObj)} : ${typeof myObj}`);

console.log(`${mySymbol.toString()} : ${typeof mySymbol}`)