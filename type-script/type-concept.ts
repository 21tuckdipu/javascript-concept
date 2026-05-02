//thsiis just high level descrbipion f type
//ts has 2 type of type casting has it is static type 
/*
  1:type inference
  2:type-anntoation
*/

let variable_stringg:string = "DipuSonar";
let variable_number :number = 123;
let variable_boolean:boolean = true;

let variable_any :any;
variable_any = 123;
variable_any = "Dipu";
variable_any = true;

let variable_void:void ;
console.log(variable_void);

let variable_undefined :undefined = undefined;
let variable_null:null = null;

//function and it return type
function helloWorld(){
    console.log("HelloWorld")
}

function helloWorld01():any{
    console.log("Print")
}

function helloWorld02():string{
    console.log("Print02");
    return "he"
}

function helloWorld03():Array<string>{
    console.log("Print03");
    return ["string"]
}

helloWorld()
helloWorld01()
helloWorld02();
helloWorld03()