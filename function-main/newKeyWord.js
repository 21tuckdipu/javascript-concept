var User = function(firstName, secondName, courseCount){

    //this.property : is an recommended way of defining the object
    this.firstName = firstName;
    this.secondName = secondName;
    this.courseCount = courseCount;
    this.getCourseCount = () =>{
        console.log(`Courcse Count is ${this.courseCount}`)
    };
}
//Note : WHERE THE CONSTRUCTOR INVOLED IN THE SCENE THERE IS AN NEW KEYWORD USED OR INVOLE RULE

var dipu = User("Do","Sonar","r")
console.log(dipu) //undefine if yoou want to create an object yoiu need to define tthe new
var sam = new User("Do","Samy","r")
console.log(sam)

//NEW KEYWROD RESPONSIBEL FOR ONVOKING THE CONSTRUCTOE AN DMAKING UNIQUE INSTANCE EVERY SINGLE TIME