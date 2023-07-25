// Arrys

// const arry= [0,1,'rupesh', 'kotal']
// console.log(arry[3])

// const Myfriend =["ritesh", "parth", "utaksrh"]
// console.log(Myfriend[2])


//******************Arry method ***************/

// const arry= [0,1,'rupesh', 'kotal']

// arry.push(5);
// console.log(arry);

// arry.pop()
// console.log(arry);

// arry.unshift(8);
// console.log(arry);

// arry.shift();
// console.log(arry);

// console.log(arry.includes(7));

// console.log(arry.indexOf("rupesh"))


// const newArry = arry.join();

// console.log(arry);
// console.log( typeof newArry);


// **************************** slice, splice *******************************

// console.log("A ", arry);
// const myarr1 = arry.slice(1,3)
// console.log(myarr1)

// console.log("B",arry)
// const myarr2=arry.splice(1,3);
// console.log(myarr2)


// =================================================

const india_hero=["shaktiman","junior-g", "hatim"]
const marvel_hero = ["flash","iron-man","hulk"]

// const allHero = india_hero.concat(marvel_hero)
// console.log(allHero);

// const allhero = [...marvel_hero,...india_hero]
// console.log(allhero);

// const mixarry = [1,2,3,[4,5,6],7,8,[9,10]]
// const onearry= mixarry.flat(Infinity);
// console.log(onearry);

// console.log(Array.isArray("rupesh"));
// console.log(Array.from("rupesh"));

let a =200;
let b =300
let c=400;

console.log(Array.of(a,b,c))