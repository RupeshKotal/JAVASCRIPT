// for each loop does not returns any value it shows only undwefined
/*
const sports = ["cricket", "football", "vallyball", "tennis"]

const play = sports.forEach( (iteam) =>{
    console.log(iteam)
    return iteam
}
)
console.log(play)   // for each loop does not returns any value it shows only undwefined 
*/

// ===============  Filter loop will return value
/*
const myNum =[1,2,3,4,5,6,7,8,9,10]

// type 1
const numbers = myNum.filter( (value) => (value > 4)
)

// type2 :-
const num = myNum.filter((arr) => {
   return arr > 3
})

//console.log(numbers)
//console.log(num)
*/

//=====================================  Returning value from foreach loop

const Numseries = [1,2,3,4,5,6,7,8,9,10]

const NumReturn =[];

Numseries.forEach(
    (num) => {
        if (num > 4){
           return NumReturn.push(num)
        }
    }
)
console.log(NumReturn)


// ========

// const books = [];

// const userbook = books.filter( (bk) => (bk.gener === 'History'))
// console.log(userbook)


