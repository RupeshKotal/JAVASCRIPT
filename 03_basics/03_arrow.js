const user= {
   userName: "rupesh",
   price: 1999,

   welcomeMessage: function(params) {
    // console.log(`${this.userName}, welcome to website`);
     console.log(this)  //op :- {
                                       //     userName: 'rupesh',
                                       //     price: 1999,
                                       //     welcomeMessage: [Function: welcomeMessage]
                                       //   }
   }
}
// user.welcomeMessage() 
// user.userName="Parth";
// user.welcomeMessage()  //op :- Parth, welcome to website
//console.log(this)  // op :- {}  ** this will give some diifent value in browser= window{}


// function lolu(params) {
      //const user = "rakesh"
//     console.log(this.user)  //// it will give value as undefined
// }

// lolu()

//$$$$$$$$$$$$$$$$$$$$$ we not use this function but we can use in object  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  Arrow function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
const chai = () => {
    let username = "rupesh"
    console.log(this.username)  // this also give undefined value
}

chai()
*/

//@@@@@@@@@@@@ basic arrow syntax @@@@@@@@@@@@@  // in this if we use {} than we have give return keyword  (Explicitly giveing retun keyword)
/*
let rupesh = (num1,num2) =>{
    return num1 + num2
}
console.log(rupesh(5,6));
*/

// @@@@@@@@@@@@@@@@@  Implicit return arrow syntax @@@@@@@@@@@@@@@@  in this we dont have to give return keyword

let rupesh = (num1,num2) => num1 + num2
console.log(rupesh(5,6));

let kartik = (num1,num2) => (num1 + num2)  //in this we dont have to give return keyword  if we give ()
console.log(kartik(9,6));

let swapnil = (num1,num2) => ({name:"rupesh", age:16})
console.log(swapnil())