"use string";
const name = "Dipu Sonar"
const repoCount = 50 

//console.log(name+repoCount+"values");   //outdated styles of the string 

//new methods for string concatentaion((())) String interpolation

//console.log('Hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String('Dipusonar')
// console.log(gameNames)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newString2  = "   Dipu Sonar"
console.log(newString2);
console.log(newString2.trim());

const url = "https//www.dipu.com"
console.log(url.replace('dipu','helloworld'));
console.log(url.includes('dipu'));  //verify that specific variable present in the data or not
console.log(url);

// console.log(gameName.split('-'));
