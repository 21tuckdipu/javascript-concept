'use strict';

// Date  is an Object in javascript

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString(),'original');
console.log(mydate.toDateString(),'DateString');
console.log(mydate.toTimeString(),'TimeString');
console.log(mydate.toISOString(),'ISOString');
console.log(mydate.toJSON(),'JSON');
console.log(mydate.toLocaleTimeString(),'LocaleTimeString');

// other Feature/localeString
console.log(mydate.toLocaleString(),'LocaleString');



console.log(mydate.toUTCString(),'UTCString');

//month start from 0 in javascript

//let myCreateDate = new Date(2023,0,23)
//let myCreateDate = new Date(2023,0,23,5,3)  // with hour and time
//let myCreateDate = new Date("2023-01-21")  //yy-mm-dd
let myCreateDate = new Date("02-12-2023")  //mm=dd-yy
//console.log(myCreateDate);
//console.log(myCreateDate.toLocaleString());


let mytimeStamp = Date.now()
//console.log(mytimeStamp);
//console.log(myCreateDate.getTime())  //this is used for the comparing the time in milisecond in javascript

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);  // add +1 while printing the month

// other Feature/localeString
console.log(newDate.toLocaleString('default' ,{
    weekday:'long'
}),'LocaleString');


