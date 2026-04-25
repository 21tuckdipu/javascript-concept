import promptSync from "prompt-sync";

let prompt = promptSync()

function reverseTheNum(number: number) {
    let user_number = String(number);
    let reverse_number = "";
    for (let i = user_number.length - 1; i >= 0; i--) {
        reverse_number = reverse_number.concat(user_number[i]);
    }
    return reverse_number;
};

let user_num = Number(prompt("Enter Number : "));
let num = reverseTheNum(user_num);
console.log("reverseNum : " + num)