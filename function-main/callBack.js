// function isEven(elements){
//     // if(elements%2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return elements %2 === 0;
// }

//another approach  === ARROW FUNCTION
var isEven = (Element) =>{
    return Element %2 === 0;
}

// console.log(isEven(3))
// console.log(isEven(4))

// var result =[2,3,4,8].every(isEven);
// var result =[2,3,4,8].every((e ) => {
//     return e%2 === 0;
// });

var result = [2,3,4,8].every((e) => (e%2 === 0));
console.log(result)