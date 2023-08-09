//genetrate a random color

// const randomColor = function(){
//     const hex = "0123456789ABCDF"
//     let color ='#'
//     for(let i=0; i < 6; i++){
//        color += hex[Math.floor(Math.random()*16)]
//     }
//        return color;
//     };

// let intervalId;
// const startChangeColor = function(){
  
// //  intervalId = setInterval(changeBg,2000)

// if(!intervalId){
//     intervalId = setInterval(changeBg,1000)  //2nd way for clean code
// }

//     function changeBg(){
//     document.body.style.backgroundColor = randomColor()
//  }
// }

// const stopChangeColor = function(){
//  clearInterval(intervalId);
//  intervalId= null;  //2nd way for clean code
// }

// document.querySelector('#Start').addEventListener('click',startChangeColor)

// document.querySelector('#Stop').addEventListener('click',stopChangeColor)
















































const randNum = function(){
    const hex = "1234567890ABCDEF"
    let color = "#"
  
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    };
    return color
}

let InterId;
const StartCol= function(){
  InterId =  setInterval(func,2000)
    function func(){
        document.body.style.backgroundColor = randNum()
    }
}

const StopCol = function(){
  clearInterval(InterId)
}

document.querySelector('#Start').addEventListener('click', StartCol)

document.querySelector('#Stop').addEventListener('click', StopCol)










