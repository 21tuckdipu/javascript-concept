import promptSync from "prompt-sync";
let prompt = promptSync()

let USER_ARR = [];

let attempt = Number(prompt("Enter your attemtp- default - 5(press enter) /n and maximum - 15"));

if(attempt == 0 || attempt < 0 ){
   attempt = 5;
}else if(Number.isNaN(attempt)){
  attempt = 5;
}

console.log(attempt+" number");
let increment = 0;
while(true){
  if(increment >= attempt){
    break;
  }else{
      let user_input = prompt(`Enter Number : ${increment +1} `);
      USER_ARR.push(user_input);
      increment+=1;
  }
}
console.log(`USER ARRAY : ${JSON.stringify(USER_ARR)}`);

//min and Max
let minimum = USER_ARR[0];
for(let i in USER_ARR ){
  if(minimum > USER_ARR[i]){
    minimum = USER_ARR[i]
  }
}
console.log(`Minimum : ${minimum}`);

//maximum number
let maximum = USER_ARR[0];
for(let i in USER_ARR ){
  if(maximum < USER_ARR[i]){
    maximum = USER_ARR[i]
  }
}
console.log(`Maximum : ${maximum}`);

//removing duplicate from array
let UQUIE_ARR :any = []
for(let num of USER_ARR){
  let isPresent = UQUIE_ARR.includes(num);
  if(!isPresent){
    UQUIE_ARR.push(num)
  }
}
console.log(`UQuince ARR - ${JSON.stringify(UQUIE_ARR)}`);