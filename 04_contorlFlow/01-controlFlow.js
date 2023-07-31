/*
const score =200;

if (score == 200){
    // const power = "Fly"  // it will exceute only on scope (recommended)
    var power="Fly" // this code is excecuted but it will create an issue in future so dont use var 
    console.log(`Power gained : ${power}`);
}

console.log(`Power gained : ${power}`);
*/

// ================== ShortHnad ==============================
/*
const balance = 1000;
// if(balance > 500) console.log(`Balce is greater than 500`), console.log("Sufficent balance");  // Implicit or shortHand (not recommended)
*/

// =================== else if ===========================
/*
const balance = 1000;

if (balance < 500){
    console.log(`less than 500`)
}

else if(balance < 700){
    console.log('less than 700');
}

else if(balance < 900){
    console.log("less than 900");
}
 else{
    console.log(`Greater than 900`)
 }

*/

// ========================= real Time Example================================

const UserLoggedIn = true;
const DebitCard = true;
const loggedInGoogle = false;
const loogedInEmail = true;
const guestUser = false;

if (UserLoggedIn && DebitCard && 2==3) {
    console.log(`Allow to buy a course`);
}

if (loggedInGoogle || loogedInEmail || guestUser){
    console.log(`user logged in`);
}




