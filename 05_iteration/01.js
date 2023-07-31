// ================  For iteration /loop ===================

// syntax 
/*
for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element === 6){
      //  console.log("This number is 6")
    }

  //  console.log(element)
    
}

*/
// =============example 2 
/*

for(let i =0 ; i <= 10; i++){
    console.log(`Outer loop :${i} `)
    for (let j = 0; j <=10; j++) {
        
       // console.log(`inner loop value : ${j} and outer loop value is : ${i}`)
       console.log(i + "*" + j + " = "  + i * j)
    }
}

*/

// EXAMPLE 3 : For arry ===============
/*
let myArry = ["rupesh", "ritesh", "parth", "utkarsh", "Shubham"]
console.log(myArry.length)
for(let i = 0; i < myArry.length; i++){
    let element = myArry[i]
    console.log(element)
}
*/

// Example 4 :-  ================================

for (let index = 1; index <= 20; index++) {

    if (index === 5){
        console.log(`5 is detected`)
        continue
    }
    console.log(`The value of i is ${index}`)
    
}