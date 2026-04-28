
import promptSync from "prompt-sync";
let prompt = promptSync()

console.log("TO-DO :- Application");
let TaskManager: any = [];

function addTask(task: string) {
    TaskManager.push(task);
    console.log(`${task} added Succesfully!`)
}

function displayTask() {
    console.log(TaskManager)
}

console.log("Press 'Q' = Quit \n Press 'T' = Add Task \n Press 'D'")
while (true) {
    let user_action = prompt("Enter Task");

    if(user_action.toUpperCase() == "T"){
        let user_task = prompt("Enter your To-DO");
        addTask(user_task);
    }
    if(user_action.toUpperCase() == "Q"){
        break
    }else if(user_action.toUpperCase() == "D"){
        displayTask()
    }
}




