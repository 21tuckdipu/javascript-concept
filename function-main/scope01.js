
var c = 900
let a = 200
// console.log(a)
// console.log(b)
// console.log(c)

// {} ====> scope when it comes with function if else white loop


//INTERVIEWS QUESTION GOBAL SCOPE CHROME AND GOBAL SCOPE IN NODE ARE TEO DIFFERENT THINGS THEY ARE NOT SAME



if (true) {
    let a = 10
    console.log('inner:', a)
    const b = 40
    var c = 90
}
// console.log(a)
// console.log(b)
console.log(a)

//SCOPE LEVEL AND MINI HOSTING

//nested scope
//for remembering nested topic ===assume a small baby can grab tyhe ice-cream from older one but olderOne can nit grab ice-cream from
// smallerOne


// hositing accessing the function before declaration of function
one()
function one() {
    const username = 'Dipu'
    function two() {
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

//different declaration of function also has certain rules for asseccing them and this is called hoisting
// newMethod(7)  this will thrown an error that this type of  method can not be assced this nis an major issue 
const newMethod = function(num){
    console.log(num)
    return num
}

