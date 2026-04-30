//auth-system
import{readFileSync , writeFileSync} from "fs"
import promptSync from "prompt-sync";
let prompt = promptSync();
/*
  username : strubg
  password : string
  confirmpasswor: string
  email:
  iaaccept :
  createAccount - Y and N  
   if(Y)-> validate nad create
   If (N) -> back - popup appear and loop ";

   created -> y -> login screen -> mail adn passrod -> login  uscessfully and display username
*/

/*
 task Break down - scenario simple and effective 
 phase01 - buld the user input template -done
 phase02 - implement the auth hash path --not -future enhacement
 phase logic for duplicaet record
 phase for logic for valid login
 pahase for logic for invalid login attenpt
*/

// demographic
let user_name: string = "";
let user_password: string = "";
let confrim_password: string = "";
let user_email: string = "";

type USER ={
  "user_email":string,
   "user_password":string
}
let load_File = JSON.parse(readFileSync("projects/basic-auth.json","utf-8")) as USER[];

console.log(load_File)
let user_Database:USER[] = load_File
// let user_Database = [
//   {
//     user_email: "dipu@gmail.com",
//     user_password: "Dipu@123456"
//   }
// ]

console.log("Create account or Login : Account or Login")
let user_input = prompt("Enter user information");

if (user_input.toLowerCase() == "account") {
  user_name = prompt("Enter user name");
  user_email = prompt("enter Email");
  user_password = prompt("Enter passwrod");
  confrim_password = prompt("enter password again same one");

  if (user_password == confrim_password) {

    let check_email_exist = user_Database.find(obj => obj.user_email == user_email);

    if (check_email_exist == undefined) {
      console.log("Account created succesfully");
      user_Database.push({ user_email: user_email, user_password: user_password });
      console.log(user_Database);
      writeFileSync("projects/basic-auth.json",JSON.stringify(user_Database,null,2))
    }else{
      console.log("Email; Esit: "+user_email);
    }
  } else {
    console.log("Wrong Password")
  }

}//login attempts
else if (user_input.toLowerCase() == "login") {
  let enter_user_email = prompt("User-Email- user email");
  let enter_user_password = prompt("Password enter");

  //another approach - filter
  let isExits = user_Database.find(obj =>
    obj.user_email == enter_user_email);

  if (isExits) {
    if (isExits.user_email == enter_user_email) {
      if (isExits.user_password == enter_user_password) {
        console.log("Login SuccessFuly")
      } else {
        console.log("Wrong Password")
      }
    }
  }
  console.log(isExits)

}

