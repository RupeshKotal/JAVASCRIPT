let randomNumber = (parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt');

const UserInput = document.querySelector('#guessField');

const guessSlot= document.querySelector('.guesses');

const remaning = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// let playGame = prompt('Enter Your age');
// const age =  Number.parseInt(playGame);
// console.log(age);

// if(age<0 | isNaN(age) || age === '' ){
//   alert(`Enter valid date`)
// }

// else{
//   alert(`You are allowed to play a game`)

//   age === playGame;
// }



if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess = parseInt(UserInput.value) 

       validateGuess(guess)
      })
}


function validateGuess(guess){
    if (isNaN(guess)){
        alert(`Please enter a valid number`)
    } else if(guess < 1){
        alert(`Please enter a number more than 1`)
    } else if (guess > 100){
        alert(`Please enter a number less than 100`)
    } else{
        prevGuess.push(guess)

          if(numGuess === 11){
           displayGuess(guess)
           displayMessage(`Game Over Random number was ${randomNumber}`)
           endGame()
          } else{
            displayGuess(guess);
            checkGuess(guess)
          }
    }
}

function checkGuess(guess){
      if(guess === randomNumber){
        displayMessage(`You guess Right`)
        endGame()
      }
      else if(guess < randomNumber){
        displayMessage(`Number is too low`)
      }
      else if(guess > randomNumber){
        displayMessage(`Nuumber is to high`)
      }
}

//clean up method
function displayGuess(guess){
   UserInput.value= ''
   guessSlot.innerHTML += `${guess}, `
   numGuess++;
   remaning.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
   lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    UserInput.value = '';
    UserInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
  const newgameButton = document.querySelector("#newGame");
  newgameButton.addEventListener('click', function(e){
     randomNumber = (parseInt(Math.random()*100+1));
     prevGuess =[];
     guessSlot.innerHTML='';
     remaning.innerHTML=`${11- numGuess}`;
     UserInput.removeAttribute('disabled')
     startOver.removeChild(p)

     playGame =true;

  })
}



