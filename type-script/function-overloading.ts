{}
/*
 rules for overloading hrt funciton  
 1:same parameter
 2:mustndefine the returh type
 3:muktiple fucntioon implementaion but single return tyoes
*/
function additionOfTwoEntity(number_01:number,number_02:number):number;
function additionOfTwoEntity(number_01:string,number_02:string):string;
function additionOfTwoEntity(number_01:boolean,number_02:boolean):boolean;

function additionOfTwoEntity(number_01:any,number_02:any){
    console.log(`${number_01} : ${number_02} : ${number_01+number_02}`);
    return number_01+number_02
}

additionOfTwoEntity(1,2);
additionOfTwoEntity("one","Teo");
additionOfTwoEntity(true,false);
