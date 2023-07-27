

// if (true){
//     var a =50;
//     let b =60;
//     const c =70; 
// }

// console.log(a);
// // console.log(b);
// //  console.log(c); 

// ***************** Nested Scope *****************************

function one(params) {
    const username = "rupesh";

    function two(){
        const website ="google.com"
        console.log(username);   // smaller nest can take value from bigger nest
    }
     
    // console.log(website); // this will give error beacause bigger netsed cant take value from smaller nest
    two()  // fuction two wil excecute and give value as rupesh
    
}

// one()

// ******************** Example using If loop ****************************

if (true){

    const userName = "rupesh"

    if(userName === "rupesh"){
        const website = "amazone"
    //    console.log(userName + website);
    }

    //console.log(website); // this will give error beacause bigger netsed cant take value from smaller nest
}

//console.log(userName); //this will give error beacause bigger netsed cant take value from smaller nest



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  INTRESTING @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(addNum(5));  // in this type it will not give error if we call here
function addNum(num){
  return num + 1   
}

//addNum(5)

// Type 2nd for declarting fuction below also called as function expressin

console.log(addTwo(8));  // this will give error // this is due to hoisting
let addTwo = function(num){
    return num +1
}
//addTwo(8)