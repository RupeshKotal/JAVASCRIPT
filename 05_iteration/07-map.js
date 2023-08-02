const myNum = [1,2,3,4,5,6,7]
 const number = myNum.map( (num) => (num +10) )

 //console.log(number)


//  =================== Chaning ==============

const newNums = [1,2,3,4,5,6,7,8,9,10]

const chain = newNums
              .filter( (num)=> num > 2 )
              .map( (num) => num * 10 )
              .filter((num) => num >= 50)
              .map((num) => num + 1)
console.log(chain)

 