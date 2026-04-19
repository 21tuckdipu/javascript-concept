"use strict";
//memory two types
//Stack (primitive)
//heap(non primitive datatype)



//StACK
let myYoutubeName = "DipuZone"


let anothername = myYoutubeName
anothername = "ChaiAurCode"
// console.log(anothername);
// console.log(myYoutubeName);


//HEAPS
let user ={
    email :"dipu&upi.com",
    name:"dipusonar"
}

let user2 = user

user2.email = "JohnCena"
console.log(user.email);
console.log(user2.email);

//in stack we get the copy of the variable not the actual reference location of the  memory therefore change are made are tempoery or locally
//in heap we get the directe access of the memory location of the variables so changes sare made are universal