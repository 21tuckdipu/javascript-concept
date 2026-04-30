
import { existsSync, readFileSync, writeFileSync, unlinkSync } from "fs";
import { faker } from "@faker-js/faker"
import promptSync from "prompt-sync";
let prompt = promptSync();

let user_Task: String[] = [];
let File_Path: string = "";
function readToDoFile(file_path: string) {
    let file_data = readFileSync(file_path, "utf-8")
    // console.log(file_data)
    return readFileSync(file_path, "utf-8")
}

function addToDoFile(file_path: string, data_string: string) {
    return writeFileSync(file_path, data_string)
}

function generateUquieToDoID(): string {
    let id = "DR" + faker.number.bigInt({ min: 100000, max: 900000 }).toString()
    return id
}

function JSONdataFormat(user_status: string, arr_task: any) {
    let date = new Date()
    return {
        status: user_status,
        date: date.toString(),
        task: arr_task
    }
}

function insertNewToDo(to_do_entry: object) {
    let id = generateUquieToDoID()
    currentLoadedFile = to_do_entry;
    return id
}

function deleteTheToDoEntry(id: string) {
    // delete fetchData[id]
}


function deleteDoFile(file_path: string) {
    unlinkSync(file_path)
}

function generateFilePath(file_name: string): string {
    let filePath = `projects/to-do-file/${file_name}.json`
    return filePath
}

function creatingNewToDo(file_name: string) {
    if (existsSync(file_name)) {
        console.log(`FileFound : ${file_name}`)
    } else {
        console.log(`FileName not Found :`)
        addToDoFile(file_name, JSON.stringify({}))
    }
}

function loadSelectedToDo(displayMSG: string, inputMSG: string): any {
    console.log(displayMSG);
    let file_name = prompt(inputMSG)
    let file_path = generateFilePath(file_name)
    if (existsSync(file_path)) {
        console.log(`FileFound : ${file_name}`);
        let fetchData: Record<string, any> = JSON.parse(readToDoFile(file_path));
        File_Path = file_path
        return fetchData
    } else {
        console.log(`FileName not Found :`)
        // addToDoFile(file_name, JSON.stringify({}))

    }
}

function searchSpecificToDo() {

}
/*
  json - {
    date:
    status:
    tasks:[
    
    ]
  }
*/

//-------------program ecution----------------
let FilePathDev = "projects/to-do-file/to-do-01.json";
let currentLoadedFile: Record<string, any>;

console.log(` 1 for adding new File , 2 - Display , 3-Update , 4- Delte to-Do`);
while (true) {
    let user = prompt("enter dersideed action to proceed....");
    if (user.toLowerCase() == "q") {
        break
    } else {
        if (user.toLowerCase() == "1") {
            let user_file_name = prompt("for creating new file : enter File name")
            let file_path = generateFilePath(user_file_name);
            creatingNewToDo(file_path);

            while (true) {
                let task = prompt("Add Task - if no - q");
                if (task.toLowerCase() == "q") {
                    break
                } else {
                    user_Task.push(task)
                }
            }
            let insert_data = JSONdataFormat("InProgress", user_Task)
            console.log(insert_data)
            insertNewToDo(insert_data);
            addToDoFile(file_path, JSON.stringify(insert_data, null, 2))
            user_Task = []
            currentLoadedFile = {}
        }
        else if (user.toLowerCase() == "2") {
            let display_file_name = prompt("Enter File name to display");
            let file_path = generateFilePath(display_file_name);
            console.log(readToDoFile(file_path));

        } else if (user.toLowerCase() == "4") {
            let file_name = prompt("Enter FileName to Delete:");
            let file_path = generateFilePath(file_name);
            deleteDoFile(file_path)

        } else if (user.toLowerCase() == "3") {
            console.log("for updated : 31 Append , 32 Update completly , 33  Delete the Entry in ToDo , Let it has it 34");

            while (true) {

                let update_action = prompt("Enter the update-action");
                if (update_action.toLowerCase() == "31") {
                    let displayMSG = "Action APPENED TO-DO";
                    let inputMSG = "ENTER NAME FILENAME"
                    currentLoadedFile = loadSelectedToDo(displayMSG, inputMSG);

                    let append_container = currentLoadedFile.task
                    while (true) {
                        let append_task = prompt("Enter the Task ");
                        if (append_task == "q") {
                            console.log(append_container);
                            addToDoFile(File_Path, JSON.stringify(currentLoadedFile, null, 2))
                            // user_Task = []
                            currentLoadedFile = {}
                            break
                        } else {
                            append_container.push(append_task);
                        }
                    }

                } else if (update_action.toLowerCase() == "32") {
                    let displayMSG = "Action UPDAYTE-COMPLETELY TO-DO";
                    let inputMSG = "ENTER NAME FILENAME"
                    currentLoadedFile = loadSelectedToDo(displayMSG, inputMSG);
                    console.log(currentLoadedFile.task);

                    let update_container = currentLoadedFile.task;

                    while (true) {
                        let replace_task = prompt("Enter the Task ");
                        if (replace_task == "q") {
                            console.log(update_container);
                            currentLoadedFile.task = user_Task
                            addToDoFile(File_Path, JSON.stringify(currentLoadedFile, null, 2))
                            user_Task = []
                            currentLoadedFile = {}
                            break
                        } else {
                            user_Task.push(replace_task)
                        }
                    }

                    break

                } else if (update_action.toLowerCase() == "33") {
                    let displayMSG = "Action DELETE- TO-DO";
                    let inputMSG = "ENTER NAME FILENAME"
                    currentLoadedFile = loadSelectedToDo(displayMSG, inputMSG);
                    console.log(currentLoadedFile)
                    currentLoadedFile.task = [];
                    addToDoFile(File_Path, JSON.stringify(currentLoadedFile, null, 2))
                    user_Task = []
                    currentLoadedFile = {}

                    break

                } else if (update_action.toLowerCase() == "34") {
                    console.log("Actions : LEAVE");
                    currentLoadedFile = {}
                    user_Task = []
                    break

                } else {
                    console.log("none - match plese enter ");

                }
            }
        } else {
            console.log("Wrong Action")
        }
    }
}
// //check the existing
// if (existsSync(FilePathDev)) {
//     console.log(`FileFound : ${FilePathDev}`)
// } else {
//     console.log(`FileName Does not FOund`)
//     addToDoFile(FilePathDev, "")
// }

// // //adding the data in file
// let fetchData: Record<string, any> = JSON.parse(readToDoFile(FilePathDev));
// // console.log(fetchData);

// let data = dataFormat(faker.person.fullName(), faker.helpers.arrayElement(["progress", "completed", "Done"]), [faker.lorem.lines(), faker.lorem.lines()]);
// console.log(data)


// let inserid = insertNewToDo(data);
// console.log(fetchData);

// //update the status  - with repected tp id
// fetchData[inserid].status = "closed";

// //update tge tasks -
// fetchData[inserid].task = [faker.lorem.slug(2)]
// console.log(fetchData);

// //write tge data in files
// deleteTheToDoEntry("DR704394")
// addToDoFile(FilePathDev, JSON.stringify(fetchData, null, 2))



