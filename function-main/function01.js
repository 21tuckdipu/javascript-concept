"use strict";

// function sayMyName(){
//     console.log("h");
//     console.log("h");
//     console.log("h");
//     console.log("h");
// }
// sayMyName()

// function addTwoNumber(number1 , number2){
//     console.log(number1+number2);
// }
// addTwoNumber(2,4)
// const result = addTwoNumber(2,4)
// console.log(result)  .
// thus will stored values undefine becuase function doe snot have an return statement 

function addTwoNumber(number1 = 0 , number2 = 0){
    if(!number1){
        if(!number2){
            return number1+number2
         }
        else{
            console.log("Please enter User Name");
            return 0
         }
    // statement after return will not be excetued
}
else{
    console.log("Please enter User Name") 
    return 0
}
}
// console.log(addTwoNumber(5,6))
// const result = addTwoNumber(3,6)
// console.log(result)

//when you do not passed the values in the function then return vakue of the function is undefined

function calculateCartPrice(...num1){
    //rest operator ... for passing multuple values
    return num1
}
// console.log(calculateCartPrice(2,9 ,8))

const user={
    username :'dipu',
    price :89
}
function handleObject(anyObject){
    console.log('username is'+anyObject.username+"price is"+anyObject.price);
}
// handleObject(user)

const myNewArrray = [1.5,6,7,8]
function returnSecondValues(getArray){
    return getArray[1]
}
console.log(returnSecondValues(myNewArrray))