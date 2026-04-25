
import promptSync from "prompt-sync";

let prompt = promptSync()

function displayResult(opreations: string, number_01: number, number_02: number, result: number) {
    console.log(`${opreations} of ${number_01} and ${number_02} : ${result}`)
}

function additionOfTwoNum(number_01: number, number_02: number) {
    let addition = number_01 + number_02;
    displayResult("ADDITON", number_01, number_02, addition)
    return addition;
}

function substractOfTwoNum(number_01: number, number_02: number) {
    let substraction = number_01 - number_02;
    displayResult("SUBSTRCTION", number_01, number_02, substraction)
    return substraction;
}

function multiplicationOfTwoNum(number_01: number, number_02: number) {
    let multiple = number_01 * number_02;
    displayResult("MULTIPLICATION", number_01, number_02, multiple)
    return multiple;
}

function divisionfTwoNum(number_01: number, number_02: number) {
    let division = number_01 / number_02;
    displayResult("DIVISION", number_01, number_02, division)
    return division;
}

function callArthematicOperations(userChoices: string, number_01: number, number_02: number) {
    switch (userChoices) {
        case "1":
            additionOfTwoNum(number_01, number_02);
            break;
        case "2":
            substractOfTwoNum(number_01, number_02);
            break;
        case "3":
            multiplicationOfTwoNum(number_01, number_02);
            break;
        case "4":
            divisionfTwoNum(number_01, number_02);
            break;
    }
}

//check the user input values 
const CALULATOR_FEATURE = {
    "1": "addition",
    "2": "substraction",
    "3": "multiplication",
    "4": "division"
}

function isOperationValid(operation: string) {
    let result = operation in CALULATOR_FEATURE
    return result
}

function isNumberValid(number: number) {
    let result = Number.isNaN(number);
    console.log(result)
    return result
}
console.log("BASIC CALUCLATOR : press 'q; for quit");
console.log(` Addition - 1 \n Substraction  - 2 \n Multiplication - 3 \n Division - 4`);

while (true) {
    let opeartion = prompt("Select the operations");
    if(opeartion.toLowerCase() == "q"){
        break;
    }
    if (isOperationValid(opeartion)) {
        let num_01 = Number(prompt("Select the number 01"));
        if (!isNumberValid(num_01)) {
            let num_02 = Number(prompt("Select the number 02"));
            if (!isNumberValid(num_02)) {
                callArthematicOperations(opeartion, num_01, num_02);
            } else {
                console.error("invalid numbvber" + num_02)
            }
        } else {
            console.error("invalid numbvber" + num_01)
        }
    } else {
        console.log("Operation invalid")
    }
}