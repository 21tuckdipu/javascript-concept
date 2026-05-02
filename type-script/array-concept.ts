{}
"use strict"
function lineBreaker(display:string = "BREAK"){
    console.log(`################${display}#################"`)
}
let animal_type :string[] = [ "domestic","wild"];
console.log(animal_type[0])

console.log("Generic Arrry Decalration");
let emp_name :Array<string> = ["Raj","Emiway"];
let emp_age:Array<number> = [1,2];
let emp_info:Array<any>=["Raj","Dino"];

console.log("Multi Type Arr");
let emp_active:(String | boolean)[] = ["Active",true];
let emp_status : Array<string|number> = ["Deactive",0];

//ierationn of Arr 
lineBreaker("Traditional Loop")
for(let i= 0 ; i < emp_status.length ; i++){
    console.log(emp_status[i]);
}

lineBreaker(" FOR-OF ")
for(let i of emp_status){
    console.log(i);
}

lineBreaker(" FOR-IN ")
for(let i in emp_status){
    console.log(emp_status[i])
}

