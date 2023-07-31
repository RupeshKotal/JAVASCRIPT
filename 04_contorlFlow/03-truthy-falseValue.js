// Suppose we have run query to get email add of user from DB 

//const userEmail = "rupesh@gmail.com"; //truthy value
const userEmail = ""; //falsey value

if(userEmail){
console.log("Got email address")
}

else{
    console.log(`NOt getting email address`)
}
