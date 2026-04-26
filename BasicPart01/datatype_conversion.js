"use strict";
let score = "33aa"
//console.log(typeof score);

//conversion 
//number coversion

//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);  //NaN not a number

/*
String to Number
"33" => 33
"331a" => NaN
"qww" => Nan
true => 1
null => 0
undefined => NaN

Boolean Conversion
1 = true
0 = zalse
"dipu" = true

*/

let schoolName = "KHS";
let lowPaySalary = 5000;
let totalMonthINYears = "12";
let avgPassCollegePassOut = "22year";

//let see the conversionn effect
console.log(`${schoolName} Convert to Number: ${Number(schoolName)}`);
console.log(`${lowPaySalary} Convert to String : ${lowPaySalary.toString()}`);
console.log(`${totalMonthINYears} Convert TO Number : ${totalMonthINYears}`);
console.log(`${avgPassCollegePassOut} Convert to number : ${Number(avgPassCollegePassOut)}`);

//conversion of Null
console.log(`Null Conversion To Number : ${Number(null)}`);

//conversion of undefined
console.log("Undefined converted to Number : "+Number(undefined));

//Boolean Conversions
console.log(`True Conversion To Number : ${Number(true)}`);
console.log(`False Conversion To Number : ${Number(false)}`);

console.log(`0 Conversion To Boolean : ${Boolean(0)}`);
console.log(`1 Conversion To Boolean : ${Boolean(1)}`);

//string conversion to Boolean
console.log(`${schoolName} to Boolean : ${Boolean(schoolName)}`);

let isloggin = 1

let booleanIsloggin = Boolean(isloggin)
console.log(booleanIsloggin);


//run command npm run type-conversion