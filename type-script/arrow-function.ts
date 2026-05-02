//is a find of anonumys fnction also called has lamda functions

let display = () =>{
    console.log("This is the Arrow Function")
}

let dispaly_hello = () => console.log("Hello World")
display()
dispaly_hello();

//suppply parameter to arrow functions
let addition = (num:number,num2:number):number =>{ return num+num2}
console.log(addition(2,4))

//class approach
class Person{
     first_name:string;
     age:number ;
     constructor(first_name:string,age:number){
        this.first_name = first_name;
        this.age = age ?? 0
     }

     display = ()=> console.log(`FirstName : ${this.first_name} SecondName : ${this.age}`)
}

let myOBj = new Person("Dipu",21);
myOBj.display()
console.log()