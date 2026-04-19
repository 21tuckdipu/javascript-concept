const myNum = [1,2,3]
// const myTotal = myNum.reduce((acc,currval) => {
//     console.log(`acc:${acc} + carval:${currval}`)
//     return acc+currval
// },4)

const myTotal = myNum.reduce((acc,curr) => curr+acc,0)

// console.log(myTotal)

const shoppingCart = [
    {
        course : "Data Science",
        price : 234
    },
    {
       course : "React js",
       price :2344
    },
    {
        course:"NOde js",
        price:3344
    }
]

const priceSum = shoppingCart.reduce((acc,item) => (item.price+acc),0)

console.log(priceSum)