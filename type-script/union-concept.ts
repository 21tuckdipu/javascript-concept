//uniion just an similar ot or operateo

let user_id : string|number;
user_id = 123;
user_id = "Mick";

function returnFunctionName(user_id:(string|number)){
    if(typeof(user_id)=="string"){
        console.log("string")
    }else if(typeof(user_id) =="number"){
        console.log("Number")
    }
}

returnFunctionName(214)
returnFunctionName("234")