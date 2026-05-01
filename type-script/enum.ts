//enum is collection of  constant data 
//type-script/enum.ts
//defailt numeric

//passing function uned to keep it at last in assign values had values to next is assign +1 in numeric

function generateValueENUM(broswer_name:string){
    if(broswer_name == "chrome"){
        return 120
    }else{
        return -1
    }
}
enum Browser{
    // chrome = generateValueENUM("chrome"),
    firefoc,
    chrome = generateValueENUM("chrome"),
    opera = 100,
    safari
}

console.log(Browser);
console.log(Browser.chrome);
console.log(Browser.firefoc);
console.log(Browser.opera);
console.log(Browser.safari)


//string Enum
enum user{
    dipu= 'Hiop',
    john = "Foe",
}
console.log(user)


//enum work with unifrom values like string or number not with boolean


enum userStatus{
    isActive= 'Hiop',
    isBlocked = 1,
}
console.log(userStatus)