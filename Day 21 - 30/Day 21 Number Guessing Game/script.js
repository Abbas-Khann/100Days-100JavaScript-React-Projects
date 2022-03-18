// First off let's access all the variables through DOM
/*
let btnAgain = document.querySelector(".btn"),
result = document.querySelector(".result"),
input = document.getElementById("input-num"),
checkBtn = document.querySelector(".btn-check"),
guess = document.getElementById("para"),
score = document.getElementById("score"),
highscore = document.getElementById("highscore");

btnAgain.addEventListener("click", playAgain);
checkBtn = addEventListener("click" , checkTwo);

function genRandom () {
    const rand = Math.floor((Math.random() * 20) + 1);
    return rand;
     console.log(rand)// To check if it's working properly
}

function compareValues(a, b) {
    if(a === b) { // basically saying if the inputted number is equal to the randomly generated number
        return 'Yes';
    }
    else if(a > b) { // if the inputted number is greater than the randomly generated number 
        if(a - b > 5) { // if the inputted number is
        return "Low"
        }
        else {
            return "Close";
        }
    }
    else {
        if(b - a > 5) {
            return "High"
        }
        else {
            return "Close";
        }
    }
}

let randGenNumber = Number(genRandom());
score.innerText = 20;
highscore.innerText = 0;

function checkTwo () {
    let guessedNum = Number(guess.value);
    let actualResult = compareValues(randGenNumber , guessedNum);

    if(actualResult === 'Yes') {
        guess.innerText = "You got it mate!"
        result.innerHTML = randGenNumber;
        if(Number(highscore.innerText < Number(score.innerText))) {
            highscore.innerText = score.innerText;
        }
    }
    else {
        guess.innerText = actualResult;
        score.innerText = Number(score.innerText) - 1;
    }
}

function playAgain() {
    score.innerText = 20;
    randGenNumber = Number(genRandom());
    guess.innerText = "Start guessing. . ."
    guess.value = '';
    result.innerText = '?'
}


*/

const btnAgain = document.querySelector(".btn");
    const randNum = document.querySelector(".result");
    const guessNum = document.querySelector("#input-num");
    const btnCheck = document.querySelector("#btn-check");
    const score = document.querySelector("#score");
    const highscore = document.querySelector("#highscore");
    const message = document.querySelector("#para");

    btnAgain.addEventListener('click',resetAll);
    btnCheck.addEventListener('click',checkTwo);

    function genRandom() {
        return  Math.floor((Math.random() * 20) + 1);   
    }

    function compare(a,b){
        if(a === b){
            return 'yes';
        }else if(a > b){
            if(a-b > 5){
                return 'low';
            }else{
                return 'close';
            }
        }else{
            if(b-a > 5){
                return 'high';
            }else{
                return 'close';
            }
        }
    }

    var randGen = Number(genRandom());
    score.innerText = 20;
    highscore.innerText = 0;

    function checkTwo(){
        var guessed = Number(guessNum.value);  
        
        var result = compare(randGen,guessed);
        
        if(result === 'yes' ){
            message.innerText = "You got it Man!";
            randNum.innerText = randGen;
            if(Number(highscore.innerText) < Number(score.innerText)){
                highscore.innerText = score.innerText;
            }
            
            
        }else{
            message.innerHTML = result;
            score.innerText = Number(score.innerText) - 1;
        }
    }

    function resetAll(){
        score.innerText = 20;
        randGen = Number(genRandom());
        message.innerText = "Start guessing...";
        guessNum.value = ''
        randNum.innerText = '?'
    }