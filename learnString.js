"use string";
const name = "Dipu Sonar"
const repoCount = 50 

console.log("<!--------------STRING-ADDITION-------------------->")
console.log(name+repoCount+"values");   //outdated styles of the string 

//new methods for string concatentaion((())) String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log("<--------------------------------------------->");

console.log("<!--------------STRING METHODS--------------------->")
const gameName = new String('Dipusonar')
console.log(`GameName : ${gameName}`)
console.log(`GameName : ${gameName} : charcter at index [0]th : ${gameName[0]}`);
console.log(gameName.__proto__);
console.log(`GameName : ${gameName} : Length of String = ${gameName.length}`);
console.log(`GameName : ${gameName} : to UpperCase ${gameName.toUpperCase()}`);
console.log(`GameName : ${gameName} : charcter at 2th : ${gameName.charAt(2)}`);
console.log(`GameName : ${gameName} : index of  'u' : ${gameName.indexOf('u')}`);

console.log("<!--------------------------------------------!");
const newString = gameName.substring(0,2)
console.log(`SubString : ${gameName} : SubString fromchar 0 to 2 ${newString}`);

const anotherString = gameName.slice(-8,4);
console.log(`SubString : ${gameName} : SubString fromchar -8 to 4 ${anotherString}`);
console.log("<!--------------------------------------------!");

console.log("<!-----------STRING TRIM---------------------------------!");
const newString2  = "   Dipu Sonar"
console.log(newString2);
console.log(newString2.trim());
console.log("<!--------------------------------------------!");

const url = "https//www.dipu.com"
console.log(`${url} : replace() functions : ${url.replace('dipu','helloworld')}`);

console.log(`${url} : check dipu is present : ${url.includes('dipu')}`);  //verify that specific variable present in the data or not
console.log("<!--------------------------------------------!");

let spiderMan = "sipder-man-looking"
console.log(spiderMan.split('-'));
