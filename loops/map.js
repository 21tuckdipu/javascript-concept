"use strict";
//Maps Basic
const userGuide = new Map();
userGuide.set("backpack",["cloth","toys","foods"]);
userGuide.set("communication","tabel");

//looping through the map
for(const [key,value] of userGuide){
    console.log(key,value)
}

//get method
console.log(userGuide.get("backpack"));

console.log("<!-------------Map-Methods----------------");
console.log(userGuide.set("backpack","OK"));
console.log(userGuide.size);
console.log(userGuide.delete("backpack"));
console.log(userGuide.has("backpack"));
console.log(userGuide.clear());

console.log("<!----------------------------");

const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.map( (num) => num+10)
//chaining NUm
//you can do n number of chaning

const newNum = myNum
                    .map((num)=>num*10)
                    .map((num) => num+1).filter((num) => num>= 40)

console.log(newNum)


