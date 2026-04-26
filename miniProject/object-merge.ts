console.log("OBJECT-MERGER");

let object01 = {"name":"dipu","dog":"fish"}
let object02 = {"cat":"dog","elephant":"key"}

console.log(object01);
console.log(object02);

//merging the objects
let mergeObject = { ...object01 , ...object02}
console.log(`Merging Approach : ${JSON.stringify(mergeObject)}`);

let experiment = {...object01 , ...object01}
console.log(`Merging Approach  Same OBJECT : ${JSON.stringify(experiment)}`)

