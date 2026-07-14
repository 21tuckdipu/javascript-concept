//functions

function displayHelloWorld(){
    console.log("Hello World")
}

function displayName(name:string){
    console.log(`Name of EMP : ${name}`)
}

function additionOfTwoNumber(number:number,number02:number):number{
    return number+number02
}

displayHelloWorld();
displayName("Dipu");
let sum = additionOfTwoNumber(23,23);
console.log(sum);

//anonymus functions
let muliptlication = function(number01:number,number02:number){
    return number01*number02
};
console.log(muliptlication(4,5))