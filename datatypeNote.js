//primitive Datatype = only copy of the data not memory reference

//7 types : string , Number , Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.4

const islogged = false
const outSideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id == anotherid)

const bigNumber = 32333333333333n  //bigint is not used in production on day to day . rarely used on day to day based



//reference type / non-primitive datatypes
// allocation of memory directly 
// array , object , function 
// non primitive datatype has datatype object



// in javascriptwe do not defined the language so its is a dynamic language
const heros = ["Shatiman","naagraj","doga"];   //array
let myobj = {
    name:"dipu",
    age:21,
    school :"passout"

} //object

console.log(typeof myobj);
console.log(typeof outSideTemp);
