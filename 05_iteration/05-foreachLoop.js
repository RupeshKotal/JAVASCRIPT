const coding =['javascript','java','ruby','python','Cpp']

coding.forEach( function (item) {
   // console.log(item);
    
} )

coding.forEach( (val) => {
   // console.log(val)
} )


// diffrent type

function print(item){
  // console.log(item)
}
coding.forEach(print)

// example
/*
coding.forEach( (itms ,inde , arr) => {
    console.log(itms, inde, arr)
} )
*/

// ===================================

const coding= [
   {
       language : "javascript",
       langugeFileName: "js"
   },
   {
       language : "python",
       langugeFileName: "py"
   },
   {
       language : "java",
       langugeFileName: "java"
   }

]

coding.forEach( (items) => {
   console.log(items.language)
})