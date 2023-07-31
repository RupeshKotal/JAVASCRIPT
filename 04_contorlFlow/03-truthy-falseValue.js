// Suppose we have run query to get email add of user from DB 
/*
//const userEmail = "rupesh@gmail.com"; //truthy value
const userEmail = ""; //falsey value

if(userEmail){
console.log("Got email address")
}

else{
    console.log(`NOt getting email address`)
}
*/

/*
falsey values:-
false, 0, -0, BigIn=0n, "", null, undefined, Nan, 

*/

/*
Trutly Value:-
"false", "0", " ", [], fuction(){},{}
*/

//======================== How to check array values 
/*
const UserEmail = [];

if (UserEmail.length === 0){
    console.log("Arry is empty")
}

*/

// ======how to check vlaue of  objects is empty or not
/*
const emtyObj = {};

if(Object.keys(emtyObj).length === 0){  // Object.keys(emtyObj) == will convert into an arry
    console .log("Object is empty")
}
*/


// ============================== Nullish coalesing operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 20;
//  val1 = undefined ?? 30

val1 = null ?? undefined ??  10 ?? 20 ?? 30
console.log(val1)


// ==================terniery operator

// condition ? true : false

const teaPrice = 200;

teaPrice >= 300 ? console.log("greater than 300 "): console.log("less than 300");




