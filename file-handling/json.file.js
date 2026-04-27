import { readFileSync, writeFileSync, appendFileSync, read } from "fs";
import {faker} from "@faker-js/faker"

let FilePaths = "file-handling/students.json";
let newPaths = "file-handling/student-copuy.json";

//file reuseable function
function readFileData(fileName) {
    let readData = readFileSync(fileName, "utf-8");
    console.log("==================================");
    return readData
}

function writeFileData(fileName, userdata) {
    let data = writeFileSync(fileName, userdata);
    console.log("==================================");
}

function appendFileData(fileName, userdata) {
    let data = appendFileSync(fileName, userdata);
    console.log("==================================");
}

let studentRecords = {
    classA: {
        "1": {
            "name": faker.person.fullName,
            "RollNumber": faker.number.int({min:1,max:1000}),
            "Gender": faker.person.gender()
        }
    }

}

//fetch teh data from the database
let fetchData = JSON.parse(readFileData(FilePaths));
console.log(fetchData);

console.log(fetchData["classA"][0]["name"]);

let newStudentdata = {
    "id": faker.number.int({min:1,max:1000}), "name": faker.person.fullName()
}
fetchData["classA"].push(newStudentdata);
console.log(fetchData); //displaying the dat

///remove the data
let classdataA = fetchData.classA.filter(item => item.id !== 2)
console.log(classdataA);

fetchData.classA = classdataA;

//adding new Class and it data

// console.log(fetchData.classB);
//adding new class
if(fetchData.classB){
    console.log("class get Created successfully");
    fetchData.classB.push(newStudentdata)
}else{
    fetchData.classB = [];
    console.log("Data get Created")
}


let inserFirstTime = writeFileData(FilePaths, JSON.stringify(fetchData, null, 2));
console.log(fetchData)
//remove the data - from json

