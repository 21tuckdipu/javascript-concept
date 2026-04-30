/*
 scopre - take inout from user 
 and put doen min,max,avg,freq
*/

import { el } from "@faker-js/faker";
import promptSync from "prompt-sync";
let prompt = promptSync();

let user_number :number[] = []

//function for min 
function returnMinNumber(){
    let min :number= user_number[0];
    for(let num of user_number){
        if(min > num) min = num
    }
    return min
}

function returnMaxNumber(){
    let max:number = Math.max(...user_number);
    return max
}

function returnAvgNumber(){
    let sum:number = 0;
    user_number.map(num => sum=num+sum);
    console.log(sum)
    return sum/(user_number.length)
}

function returnFrequencyOfChar(){
    //option visible for me
    //task - option arr - from arr fetch teh uquie char
    let uquie_arr:number[]= []
    for(let item of user_number){
        if(uquie_arr.includes(item)){
            continue
        }else{
            uquie_arr.push(item)
        }
    }

    //buy uquire arr we will find the frequency
    let frequecy_counter :Record<string,number> = {}
    for(let item of uquie_arr){
        let count = user_number.filter(iter=> iter === item);
        // console.log(count)
        let keys = String(item);
        frequecy_counter[keys]= count.length
    }
//    console.log(frequecy_counter)
   return frequecy_counter
}

console.log("Enter Number based on that we will display AVG , MIN , MAX and Frequey of Numbers");

let user_input :string = ""
while(true){
    user_input = prompt("Enter number");
    if(Number(user_input)){
        // console.log("Number is Valid"+user_input);
        user_number.push(Number(user_input))
    }else if(user_input == "q"){
          break
    }else{
        console.log("Number is not valid : "+user_input)
    }
}

console.log(user_number);
console.log(returnMinNumber()+"Min");
console.log(returnMaxNumber()+"max");
console.log(returnAvgNumber()+"Avg");
console.log(returnFrequencyOfChar())

