// function addTwonum(num1,num2) 
// {
//    console.log( num1 + num2);
// }

// addTwonum(3,4)


// function addTwonum(num1,num2) 
// {
//    return num1 + num2;
// }

// addTwonum(3,4)
// const result = console.log(addTwonum(7,9));



// function loggedinUser(userName) {
//     return `${userName} is just logged in`
// }

// console.log(loggedinUser("rupesh"));


function calculateCartPrice(...num1){
          return num1
}

console.log(calculateCartPrice(200,300,400));


// how to pass objects in function 

const user = {
    userName : "rupesh",
    price: 200
}

function handleobje(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleobje(user)

handleobje({
    userName:"rupesh",
    price: 400
})



// how to pass Arry in function


const NewArry =[200,300,400,500]

function returnSecondValue(getArry){
    return getArry[1]
}

console.log(returnSecondValue(NewArry))