//function with parameter with mandatory and default argumenet

function getInformation(name:string , age ?:number){
    console.log(`Name : ${name} , AGE ${age ?? 23}`);

}

//fir optional parameter ?:
//for default values user ??
getInformation("Dipu")