console.log('hello')

//defining the variable in python

let nameStudent ='Dipu'
var studId ="STIT2024"
companyLocation = 'Mumbai'
const country = 'India'


//printing on the Display
//console.log(nameStudent);
//console.log(studId);
//console.log(companyLocation);



/*trying to overide the variable to see their behavoir of the code*/
nameStudent ='Jackson'
studId ='STCS2024'
companyLocation="Jaipur"

//country = 'America' // this is not allowed due to   constant  declaration of the variable

//we do not use the var variable due to it scope nature in block scope and functional Scope

//table keyword is used to declare the table 
console.table([nameStudent,studId,companyLocation]);
console.log(country)

//variation in console.log statement
console.log('123.123',123,true);

//printing the statement with the help of substitute
console.log('Test %s %j',123 ,'abc');
console.log('%o',{dipu:"name" , hek:123});
/* 
%s    string
%o  object string
%j   json string   
this symbol are use to convert in to specific format has describe string , object , json string format while using in the 
consolle.log statement
*/

//printing the specific artibute
a = 99;
console.log('%s%%',a);

//printing the nested object
console.log(JSON.stringify({first:'jane' ,  last:'Doe'} ,null , 2));