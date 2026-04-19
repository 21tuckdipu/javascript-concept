'use strict';

const course ={
    courseName : "JsInHindi",
    price : 999,
    coureInstructor: "Rajesh"
}

//syntax for object desturcting 

const { coureInstructor} = course
const {courseName :name} = course
console.log(coureInstructor)
console.log(name)

//api concept :
//api in simple language : jabi apko apana kam kisi aur ke sir pe dalana hota hai tu wose api kaha the hai

//json values comes from backened  (javascript object notation)==> universal in all language not limited to javascript only
//randomuserme  ===> a webseite for getting the api
//then this data can be fetch by the programmmer
//u can alsom use dan apiformater to look and understanf theapi