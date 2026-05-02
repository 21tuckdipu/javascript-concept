"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = exports.user = void 0;
//this function is used for testing with different stuff
// normal like js no over-head
//switch case wrok with all type of data type like number , booleand and enums
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
exports.user = "Monday";
switch (exports.user) {
    case "Monday":
        console.log("MONDAY");
        break;
    case "Tuesday":
        console.log("TUESDAY");
        break;
    case "Wednesday":
        console.log("WEDNESDAY");
        break;
    case "ThrusDay":
        console.log("THRUSDAY");
        break;
    case "FRIUDAY":
        console.log("FRIDAY");
        break;
    case "SATURADAY":
        console.log("SATURADY");
        break;
    case "SUNDAY":
        console.log("SUNMDAY");
        break;
    default:
        console.log("No found");
        break;
}
//working with enums
var Browser;
(function (Browser) {
    // chrome = generateValueENUM("chrome"),
    Browser[Browser["firefoc"] = 0] = "firefoc";
    Browser[Browser["chrome"] = 1] = "chrome";
    Browser[Browser["opera"] = 2] = "opera";
    Browser[Browser["safari"] = 3] = "safari";
})(Browser || (exports.Browser = Browser = {}));
var data_enum = Number(prompt("enter "));
switch (data_enum) {
    case Browser.chrome:
        console.log("CHROME");
        break;
    case Browser.opera:
        console.log("FireFOX");
        break;
    case Browser.safari:
        console.log("SAFARI");
        break;
    default:
        console.log("This is teh BUG");
}
