import { appendFileSync, readFileSync, writeFileSync, unlinkSync, existsSync, linkSync } from "fs";

let FilePaths = "file-handling/pizza-order.txt";
let newPaths = "file-handling/pizza-order-copy.txt"

let checkFileExists = existsSync(FilePaths);

if (!checkFileExists) {
    let creatNewFile = writeFileSync(FilePaths, "")
}
let ReadData = readFileSync(FilePaths, "utf-8");
console.log("ReadingFile" + ReadData);

let WriteData = writeFileSync(FilePaths, "Dipu  This Options-Stop IOT");
// console.log("ReadingFile+Aftwer Write"+ReadData)

let fetchUpdatedData = readFileSync(FilePaths, "utf-8");
console.log("ReadingFile+Aftwer Write" + fetchUpdatedData)

let appeadTheData = appendFileSync(FilePaths, "Michacel Jackson updatedData");

let readAppendData = readFileSync(FilePaths, "utf-8");
console.log("ReadingFile+Aftwer Appened" + readAppendData)

let emptyTheFile = writeFileSync(FilePaths, "Dip[u Michcel");
console.log("ReadingFile+Aftwer Emptying File" + emptyTheFile)
// let deleteTheFile = unlinkSync(FilePaths);
let checkAfterDelete = existsSync(FilePaths);
if (!checkAfterDelete) {
    console.log("FileDeleted");
} else {
    let readDeleteFile = readFileSync(FilePaths, "utf-8");
    console.log(`FileDelted Rwad : ${readDeleteFile}`)

}

//hete making hard copy of files
let checkLinkExist = existsSync(newPaths);
if (!checkLinkExist) {
    let hardLink = linkSync(FilePaths, newPaths);
}

//writng after update
let updateSecond02 = writeFileSync(FilePaths,"DipuCophyPAth")

