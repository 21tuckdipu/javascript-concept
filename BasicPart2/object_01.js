'use strict';

//object ===class01
/*
Singleton

object literals
*/
//Object.create = {} //singleton


const mySym = Symbol("key1")
//displaying the symbol in object
//literal method
const Jsuser = {
    [mySym] : "key1",
    "fullname":"DipuSonar",
    name :"Dipu",
    locationWork : "Jaipur",
    email:"dipu@google.com" ,
    age :21 ,
    isloggedIn : false,
    lastLoginDays : ["Minday","Tuesday"]

}

//accessing the object 
// console.log(Jsuser.email);
// console.log(Jsuser['email']);

//use of sqaure notation
// console.log(Jsuser["fullname"]);
// Jsuser.email = "dipuSoanr@microsoft.com"
//Object.freeze(Jsuser)

//console.log(Jsuser)

//in javascript function can also declare has a string

Jsuser.greeting = function(){
    console.log("hello Js user");
}
// console.log(Jsuser.greeting());
// Jsuser.greeting()

Jsuser.greetingtwo = function(name){
    console.log(`hello world , ${this.name}`);
}
// Jsuser.greetingtwo('Dipu')

console.log(Jsuser)