'use strict';

const marvel_heors = ["john cena", "emiway_banrai","adc","albetp"]
const dc_heros  = ['superman' , 'Flash','batman']

// marvel_heors.push(dc_heros)
// console.log(marvel_heors);  // it does not merege the array . it makes array with in the array
// console.log(marvel_heors[4] [1]);  //asscessing  the flash values directly in the databases

//concatation 
// let all_heros = marvel_heors.concat(dc_heros)
//console.log(marvel_heors);
//console.log(all_heros);

/* 
push added array ion the existing array
cocat merge the array and return the new array

*/

//spread : alernate of concat
// const all_newHeros  = [...marvel_heors ,...dc_heros]
// console.log(all_newHeros);

//Complex array handling
//const anotherArray = [1,2,3,4,5,[143,45],6,7,8,[89,[8,9,0],9]]
//let useAbleArray = anotherArray.flat(Infinity)
//console.log(useAbleArray)

//
// console.log(Array.isArray("Dipu"));
// console.log(Array.from("Dipu"));
//console.log(Array.isArray((name:"Dipu" )));   //error in this line of code




let  score1 = 100
let score3 = 234
let score2 = 333
// console.log(Array.of(score1 , score2 , score3));  //forming an array  from the set of the variable

//learn more about the is , from , of method of the array

