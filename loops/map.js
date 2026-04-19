const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.map( (num) => num+10)
//chaining NUm
//ypu can do n number of chaning

const newNum = myNum
                    .map((num)=>num*10)
                    .map((num) => num+1).filter((num) => num>= 40)

console.log(newNum)

//chaining mehtods
