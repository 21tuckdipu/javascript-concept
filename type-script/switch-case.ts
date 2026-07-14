//this function is used for testing with different stuff
// normal like js no over-head
//switch case wrok with all type of data type like number , booleand and enums
import promptSync from "prompt-sync";
let prompt = promptSync();
export let user: string = "Monday";

switch (user) {
    case "Monday":
        console.log("MONDAY")
        break
    case "Tuesday":
        console.log("TUESDAY")
        break
    case "Wednesday":
        console.log("WEDNESDAY")
        break
    case "ThrusDay":
        console.log("THRUSDAY")
        break
    case "FRIUDAY":
        console.log("FRIDAY")
        break
    case "SATURADAY":
        console.log("SATURADY")
        break
    case "SUNDAY":
        console.log("SUNMDAY")
        break
    default:
        console.log("No found")
        break
}

//working with enums
export enum Browser{
    // chrome = generateValueENUM("chrome"),
    firefoc,
    chrome ,
    opera,
    safari
}
let data_enum = Number(prompt("enter "));
switch (data_enum) {
    case Browser.chrome:
        console.log("CHROME");
        break
    case Browser.opera:
        console.log("FireFOX");
        break
    case Browser.safari:
        console.log("SAFARI");
        break
    default:
        console.log("This is teh BUG")
} 