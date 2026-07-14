{}
/*
  forLoop : 
   for traditional
   for in 
   for of
 hwile loops
 do-while -loop
*/

//simple for loop
let temp:string = ""
for(let i = 0 ; i<10 ; i++){
    if(i == 4){
        break
    }
    temp = temp+" "+i
}

let my_arr = [11,23,33,43,55,66,77]
console.log(my_arr)
for(let num of my_arr){
    console.log("For OF : "+num)
}

for(let index of my_arr){
    console.log("for-in : "+index+" : "+my_arr[index])
}
console.log(temp);

//iterating over string
let my_loops = "hello world";
for(let num of my_loops){
    console.log(`string with for-of : ${num}`)
}

//while loops and it working styles
//whne number of iteration of fixed , ot time or number of iteration is not fixed
let num = 1;
while(num <10){
    console.log(`While Loops : ${num}`);
    num +=1;
}

//do while
num = 1
do{
    console.log(`DO-WHILE :  ${num}`)
}while(num !=1)