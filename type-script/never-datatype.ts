import { hasSubscribers } from "node:diagnostics_channel";

{}

//this never datatype is has name suggest it never return or nevwr full filll specifc condition onces set 

let chest:never ; // meand thsi variuabe will neve hold the value
// chest = "apple"

function throwError():never{
    throw new Error("Dipu Display")
}

function infinteLoop():never{
    while(true){}
}
// console.log(throwError());
console.log("Hello")
console.log(infinteLoop());

type shape = "orange"|"mango";
let fruit :shape= "orange"
// const check : never = fruit;