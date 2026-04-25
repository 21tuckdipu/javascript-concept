//make code more specifc
function passwordStrengthChecker(password:string){
    //len checker
    let regrex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d+)/  //lookaheads
    let user_password = password;
    if(user_password.length <8){
        console.log("Length should be minum 8 Character")
    }else{
        if(regrex.test(user_password)){
            console.log("Login Successfully")
        }else{
            console.log("Use Small , Cap and speical Charactes ")
        }
    }
}

passwordStrengthChecker("a123B123456")
passwordStrengthChecker("123Ad")
passwordStrengthChecker("B1235666")