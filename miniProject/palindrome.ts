import promptSync from "prompt-sync";

let prompt = promptSync()

function reverseGivenString(sequence:string){
     let user_string = sequence;
     let reverse_string = "";
    //  console.log("initail-string "+reverse_string)
     for(let i = user_string.length-1 ; i >=0 ; i--){
        reverse_string = reverse_string.concat(user_string[i])
        // console.log(`Reverse String : ${i} : ${reverse_string}`)
     }
    //  console.log(`Reverse String  : ${reverse_string}`);
     return reverse_string
}

function checkisPalindromeSeq(user_string:string){
    let given_string = user_string;
    let compare_string = reverseGivenString(given_string);
    if(given_string === compare_string){
        console.log(`is palindrome : ${given_string} : ${compare_string}`)
        return true
    }else{
         console.log(`is not palindrome : ${given_string} : ${compare_string}`)
        return false
    }
}

checkisPalindromeSeq("123rtyy");
checkisPalindromeSeq("mzmz");
checkisPalindromeSeq("madam");
checkisPalindromeSeq("1234");