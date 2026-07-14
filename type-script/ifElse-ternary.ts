{}

//file - works same has traditional looping
let isStatus:boolean = true;
if(isStatus){
    console.log("True");
}else{
    console.log("False")
}

//Ternary operator
let num_01 = 7
let num_02 = 55
let value = num_01 >num_02 ? console.log("Greater"):(num_01 == num_02)?console.log("Equal"):console.log("Smaller")