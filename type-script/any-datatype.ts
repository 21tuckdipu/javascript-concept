{}
function printLines(){
    console.log("---------------------------------")
}
//can be any data type primitve if declare
let employee_name:any = "Dipu";
let employee_code :any = 123;
let employee_status:any = true;

console.log(`${employee_name} : ${typeof employee_name}`)
console.log(`${employee_status} : ${typeof employee_status}`)
console.log(`${employee_code} : ${typeof employee_code}`)

//declaraction of arr 
let employee_record : Array<any>= ["123",123,true];
console.log(`Array  : ${employee_record} : ${typeof employee_record}`);

//looping through teh arr:
console.log("traditional For Loop")
for(let i = 0 ; i<employee_record.length;i++){
    console.log(employee_record[i])
}

console.log(" For in Loop")
for(let i in employee_record){
    console.log(employee_record[i])
}

printLines()
console.log(" For OF Loop")
for(let i of employee_record){
    console.log(i)
}
printLines()




//decalaration of objects
let employee_salary:Record<any,any> = {
    "Dipu":123,
    123:"WorkingINSchool"
}

//defaitl the key of obkecxt is string
let enployee_salary_02:Record<string,any> ={
    "india":123,
     "Dho":"Dipu"
}

let employee_salary_03:Record<any,string> ={
    "india":"677",
     "Dho":"45"
}

//looping through the objects
printLines()
console.log("For traditional Loops");

let objectKeys = Object.keys(employee_salary)
console.log(objectKeys)
for(let i= 0; i<objectKeys.length; i++){
    let values = employee_salary[objectKeys[i]];
    console.log(values)
}
printLines();

function info(a:number,b:number):any{
    if(a>b){
        return true
    }else{
        return "False"
    }
}
console.log("Check how any work in TS : 4 > 5 ",info(4,5),typeof(info(4,5)));
console.log("Check how any work in TS : 5 > 4 ",info(5,4),typeof(info(5,4)));