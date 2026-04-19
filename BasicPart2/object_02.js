'use strict';

//const tinderUser = new Object( )     //singleton object
const tinderUser = {}  //non  SingletonUser

tinderUser.name = "Sam"
tinderUser.id = 23
tinderUser.isloggedIn =false

//console.log(tinderUser)

const regularUser ={
    email:"somedigital@gmail.com",
    fullname:{
        firstname :"Dipu",
        LastName : "Sonar"
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.firstname)  //you can go has many nesting in objects in javascripts


//we can combine the object to eachother
//while combining one ibject to another object , object also behave same ha s array property of combining to eachother

const obj1 = { 1:"a" , 2 :"b"}
const obj2 = {3:"c" , 4:"r"}


const obj3 = {obj1 , obj2}
// console.log(obj3)

const obj4  = Object.assign({},obj1,obj2)
// console.log(obj4)   //mereging two object into one object (tareget object)

//latest and array concept while merging the objects
const obj5 = {...obj1,...obj2}
// console.log(obj5)

//when value are coming from the databases
const user =[
    {

    },
    {

    },
    {

    }
]


//below dot method return the  array the output
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("name"));  //return true or false based on the parameter psseed in it