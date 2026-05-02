//function with parameter with mandatory and default argumenet

function getInformation(name:string , age ?:number){
    console.log(`Name : ${name} , AGE ${age ?? 23}`);

}

//default - parameter
function helloWorld(name:string ="hell",msg :string = "Welcome"){
    console.log(`${name} : ${msg}`)
}

//fir optional parameter ?:
//for default values user ??
getInformation("Dipu");
helloWorld("Dipu","Thanks");
helloWorld()