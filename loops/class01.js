const coding = ["js","riby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values)

//filter approach
const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNUm = myNums.filter((num) => num > 5)

// //Ruleif {} apply then you have to use return keyword to return the values
// const newNUm = myNums.filter((num) =>{
//     return num > 5})
// console.log(newNUm)


//other approcah

const newNum = []
myNums.forEach((num) =>{
    if(num > 4){
        newNum.push(num)
    }
})
console.log(newNum)
