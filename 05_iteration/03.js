/*
// =============== For of loop
// example1
const arr =[1,2,3,4,5];
for(const val of arr){
   // console.log(val);
}

// ex :-02
const stringarr = ["tcs","infosys","wipro","accenture"]

for(const company of stringarr){
  //  console.log(company);
}

//ex :-03

const greeting = "Namaste";
for (const greet of greeting){
    console.log(`character of string ${greet}`);
}

*/

// ===========================  Maps ===========================

const map = new Map()
map.set('In','INDIA')
map.set('Aus', 'Australia')
map.set('Eng', 'England')
map.set('Aus', 'Australia') // it does not get the duplicate value

//console.log(map)

// how to loop map
for (const [key,value] of map) {
   // console.log(`${key} :- ${value} `)
}

// for object 
/*
const newObj = {
    game1: "cricket",
    game2: "football",
    game3: "basketball"
}
//console.log(newObj)

for (const [key,value] of newObj){
    console.log(obj)
}

=============== this will give error beacuse object is not iterable
*/



