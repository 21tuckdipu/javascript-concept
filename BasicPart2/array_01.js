'use strict';
import {printDivider , displayHeade} from "../reuseable.feature.js";

const display_arr = (arr)=> console.log(arr);

const myarray = [1,2,3,4,5,6]  //array contain comman datatype element , mutiple datatype element also

//javascript array are mixed
//javascript array are not fixed in  size
// javascript array are not access by string based value 
//array made a shallow copy means change in array 

//different approach of declaring the arr

printDivider();
displayHeade("ARRAY-DECALRATION");
const myFavoriteHeore = ['Shaktiman', 'Nagaraj']
const myArray2 = new Array(1,2,34,4);

display_arr(myarray);
display_arr(myArray2)
display_arr(myFavoriteHeore)

printDivider();

displayHeade('ARRAY-OPERATION-METHOD');
console.log(myarray[1]+"  ACCESSING AT INDEX 1 : "+myarray);

//operations
displayHeade(" Arr before push - 71");
display_arr(myarray)
myarray.push(71);

displayHeade(" arr after push")
display_arr(myarray)

displayHeade(" POP - Method - remove the last element from arr")
myarray.pop(); // remove the last elemrnt form the array
display_arr(myarray)

let unshift_num = 99
displayHeade(` unshift - add ${unshift_num} from front`);
myarray.unshift(99); //add the element at the start of the arry
display_arr(myarray)

displayHeade(` unshift - remove ${unshift_num} from front`);
myarray.shift()  // remove the first elemt from the array
display_arr(myarray)

printDivider()
displayHeade(" arr include ")
let check_num_include = myarray.includes(9)
display_arr(`${check_num_include} : ${myarray}`)  // check wehther thw values exit or not in the arry

printDivider()
displayHeade(" Index-off ")
let fetch_index_num = myarray.indexOf(3);
display_arr(`${fetch_index_num} : ${myarray}`) // return the  index value of the values pass in the arry

printDivider()
displayHeade(" JOIN ")
display_arr(myarray.join(" | ")+" converted to string") // convert the array in to string

printDivider();
displayHeade(" SLICE , SPLICE ")
//Slice , Splice

display_arr(`Before SLICE : ${myarray}`)
const myn1 = myarray.slice(1,3);
display_arr(myn1)
display_arr(`Afterr SLICE : ${myarray}`)

printDivider()
display_arr(`Before SPLICE : ${myarray}`)
const myn2 = myarray.splice(1,3);
display_arr(myn2)
display_arr(`Afterr SPILE : ${myarray}`)
//in splice the whole array sturcture has beeen change the index which is passed in splice is remove from the main array

