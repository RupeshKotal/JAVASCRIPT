const mysym = Symbol("key1")

const user={
    name:"rupesh",
    'age':18,
    [mysym]: "key1",
    location:"nagpur",
    email:"rupesh.kotal99gmail.com"
}

// console.log(user.name);
// console.log(user['age']);
// console.log(typeof user[mysym]);

// user.email = "rupes@gmail.com"
// console.log(user)

// Object.freeze(user.email);
// user.email ="dendu@gamil.com"

// user.email="sfskfvbsi"

// console.log(user)


// ******************************* functions ******************************************

// user.greeting = function(){
//     console.log('hello js user');
// }

// user.greetingtwo = function(){
//     console.log(`hello js user, ${this.name}`);
// }

// console.log(user.greeting());
// console.log(user.greetingtwo());


// object part2 

// const tinderuser = new Object();   //sigle ton object

// const tinderuser ={}

// tinderuser.id="123abd"
// tinderuser.name="hitsh"
// tinderuser.age=32
// console.log(tinderuser)


const regulerUser ={
    email: 'hey@gmail.com',
    fullname:{
        userName:{
            firstname:"rupesh",
            lastName: "Kotal"
        }
    }

}

// console.log(regulerUser.fullname.userName.firstname)

const tinderuser ={}

tinderuser.id="123abd"
tinderuser.name="hitsh"
tinderuser.age=32

const tinderuser1 ={
    id1: "123abd",
    name2: "hitsh", 
    age2: 32
}

// const obj = Object.assign({}, tinderuser,tinderuser1)

// console.log(obj)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(Object.hasOwnProperty("id1"));



// ***************************** object part3

//Destructuiring
const course ={
    courseName: "kavascript",
    CourseInstuctur: "hitesh",
    age:34
}

const {CourseInstuctur : inst}=course
console.log(inst);