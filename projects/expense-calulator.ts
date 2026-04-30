/*

  appraoch simple and effective:
  task -> {
    obj user : number: usr
  }
    display
    caluator

*/
import { table } from "node:console";
import promptSync from "prompt-sync";
let prompt = promptSync();

let expense_record: Record<string, any> = {}

function addExpense(keys: string, values: any) {
    expense_record[keys] = values;
}

function calulateData() {
    let count: number[] = Object.values(expense_record);
    let sum = 0;
    for (let num of count) {
        sum = sum + num
    }
    return sum
}

function displayDataInTable(){
    table(expense_record)
}

while (true) {
    let user_keys = prompt("Enter User category name");
    // let user_input = prompt("Enter number");

    let user_input :any;
    if (user_keys) {
        if (user_keys.toLowerCase() == "q") {
            break
        }else{
              user_input = prompt("Enter number");
        }
        if (Number(user_input)) {
            // console.log("Number is Valid"+user_input);
            addExpense(user_keys, Number(user_input))
        } else if (user_input == "q") {
            break
        } else {
            console.log("Number is not valid : " + user_input)
        }
    } else {
        console.log("Empty Track")
    }
}
console.log(calulateData()+" : sum")
displayDataInTable()