const coding = ["js","ruby","java","python","cpp"]

console.log("<!---------------------FOR EACH LOOP---------------->")
const values = coding.forEach((item)=>{
    console.log(item);
    return item; // this will has no - impact has for-each is only used for looping purpose
})
console.log("the Value of values  : "+values)

//filter approach
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNumberArr = myNums.filter((num) => num > 5)
console.log(`${JSON.stringify(myNums)} : Filter number > 5 = ${JSON.stringify(newNumberArr)}`);

// //Ruleif {} apply then you have to use return keyword to return the values
const returnApproach = myNums.filter((num) =>{
    return num > 5})
console.log(` ${JSON.stringify(myNums)} : Filter with Return : ${JSON.stringify(returnApproach)}`)


//other approcah
const newNum = []
myNums.forEach((num) =>{
    if(num > 4){
        newNum.push(num)
    }
})
console.log(` ${JSON.stringify(myNums)} : ForEach and push Methods : ${JSON.stringify(newNum)}`)
