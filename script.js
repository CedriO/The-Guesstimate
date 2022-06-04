//DOM elements
const guessForm = document.getElementById('guess-form');
let questionDisplay = document.getElementById('questionDisplay')
let unitsDisplay = document.getElementById('units')

//Load object
const questionIndex = Math.floor(Math.random()*109)
const splitAnswer = fermiEstimations[questionIndex].answer.split(" ")
const answerUnit = (splitAnswer.length === 2) ? splitAnswer[1]: 'No units';
questionDisplay.innerText = 'Question ' + questionIndex + ': ' + fermiEstimations[questionIndex].question
unitsDisplay.innerText = `Units: ${answerUnit}`

//Global var
let guess = 0
let score = 0

function guessValidation(){
  let rawGuess = guessForm.guess.value;
  guess = rawGuess.replace(/ /g, '')
  //if (typeof guess !== 'number') window.alert("Please enter a number");
}

function evaluateGuess(){
  const scalingFactor = 100;
  let orderMagnitude = Math.abs(Math.log10(guess/Number(splitAnswer[0])));
  if (orderMagnitude < 3){
    let unscaledScore = 1 - (orderMagnitude/3);
    score = scalingFactor * unscaledScore;
  }
}

function displyRessults(){
  document.getElementById('guess').innerText += guess  
  document.getElementById('answer').innerText += splitAnswer[0]  
  document.getElementById('score').innerText += score    

  document.getElementById('input').style.display = 'none'  
  document.getElementById('result list').style.display = 'block'  
}

//Function that runs the game bt calling the functions above
function runGame(event){
  guessValidation()
  evaluateGuess()
  displyRessults()
}

//Event handlers
document.getElementById('enterButton').onclick = runGame
