function setUserName(user_name){

    this.user_name = user_name
    console.log("called")
}

function createUser(user_name,email, pass){
   
    // setUserName.call(user_name)
    setUserName.call(this,user_name)
    this.email = email;
    this.pass = pass;
}

const chai = new createUser("chai","chai@gnail.com","123")
console.log(chai)