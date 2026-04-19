'use strict';

const myarray = [1,2,3,4,5,6]  //array contain comman datatype element , mutiple datatype element also

//javascript array are mixed
//javascript array are not fixed in  size
// javascript array are not access by string based value 
//array made a shalllow copy means change in array 

const myFavoriteHeore = ['Shaktiman', 'Nagaraj']
const myArray2 = new Array(1,2,34,4);

console.log(myarray);
//console.log(myArray2);
//console.log(myFavoriteHeore);

//console.log(myarray[1]);
//myarray.push(71);

//console.log(myarray);
//myarray.pop(); // remove the last elemrnt form the array

//console.log(myarray);

//myarray.unshift(9); //add the element at the start of the arry
//myarray.shift()  // remove the first elemt from the array

// console.log(myarray.includes(9));  // check wehther thw values exit or not in the arry

//console.log(myarray.indexOf(3));  // return the  index value of the values pass in teh arry
//console.log(myarray);

// console.log(myarray.join())  // convert the array in to string

//Slice , Splice

console.log("A",myarray);
const myn1 = myarray.slice(1,3);
console.log(myn1);
console.log("A",myarray);

const myn2 = myarray.splice(1,3);
console.log(myn2);
console.log(myn2);

//in splice the whole array sturcture has beeen change the index which is passed in splice is remove from the main array

