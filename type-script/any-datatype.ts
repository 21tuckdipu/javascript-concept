{}

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

console.log(" For OF Loop")
for(let i of employee_record){
    console.log(i)
}




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
for(let i= 0; i<employee_salary ; i++){
    
}
