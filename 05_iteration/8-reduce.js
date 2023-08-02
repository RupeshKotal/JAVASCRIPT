const myNums = [1,2,3,4,5]

const total = myNums.reduce( (acc, currVal) =>{
    console.log(`acc: ${acc} & currVal : ${currVal}`)
    return acc + currVal
},0 )

console.log(total)

///  example

const shopingCart= [
    {
        courseName: "javascript",
        price: 999
    },
    {
        courseName: "javascript",
        price: 1999
    },
    {
        courseName: "javascript",
        price: 900
    },
    {
        courseName: "javascript",
        price: 2999
    }
]

const myTotal = shopingCart.reduce( (acc,Val) => 
(acc + Val.price) ,0)
    
    console.log(myTotal)