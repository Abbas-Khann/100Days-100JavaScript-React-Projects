// Let's look at the requirements of the project
/*

- Changing of the player's turn once the other player's turn is done
- Adding scores after a player's turn
- Adding the box shadow on the particular player's turn to show that it's this player's turn now
- Any player who scores twenty first wins and the Roll-Dice button changes to reset game button
- Generate a random number between 1 - 6 for the dice 

*/

// Let's access the elements through DOM

let playerTurn = document.querySelector(".player-turn")
let player1Score = document.querySelector(".player1-score")
let player2Score = document.querySelector(".player2-score")
let player1Box = document.querySelector(".player1-box")
let player2Box = document.querySelector(".player2-box")
let diceBtn = document.querySelector(".dice-btn")
let resetBtn = document.querySelector(".reset-btn")

// let player1Array = []
let sum = 0;
let player1Turn = true
let player1CurrentScore = 0 
let player2CurrentScore = 0
function generateRandom() {
    let rand = Math.ceil(Math.random() * 6);
    // console.log(rand)
    return rand
}

generateRandom()

diceBtn.addEventListener("click", () => {
    let displayScore = generateRandom()
    // console.log(displayScore)
    if(player1Turn) {
      player1CurrentScore += displayScore // player1CurrentScore = player1CurrentScore + displayScore
    //   if(Player1CurrentScore >= 20) {
    //     playerTurn.textContent = `Player 1 Won 🥳`
    //   }
      player1Box.textContent = displayScore
      player1Score.textContent = `Score: ${player1CurrentScore}`
      player1Box.classList.add("display-score")  
      player1Turn = false
      player1Box.classList.remove("display-score")
      player2Box.classList.add("display-score")
      playerTurn.textContent = `Player 2 Turn`
      gameWin()
    }
    else {
        // if(player2CurrentScore >= 20) {
        //     playerTurn.textContent = `Player 2 Won 🎉`
        // }
        player2CurrentScore += displayScore
        player2Box.textContent = displayScore
        player2Box.classList.remove("display-score")
        player1Box.classList.add("display-score")
        player2Score.textContent = `Score: ${player2CurrentScore}`
        player1Turn = true
        playerTurn.textContent = `Player 1 Turn`
        gameWin()
    }
    
})

function gameWin() {
    if(player1CurrentScore >= 20) {
        playerTurn.textContent = `Player 1 Won 🥳`
        diceBtn.style.display = "none"
        resetBtn.style.display = "block"
    }
    else if (player2CurrentScore >= 20) {
        playerTurn.textContent = `Player 2 Won 🎉`
        diceBtn.style.display = "none"
        resetBtn.style.display = "block"
    }
    
}

resetBtn.addEventListener("click", function() {
    player1CurrentScore = 0
    player2CurrentScore = 0
    player1Box.textContent = `-`
    player2Box.textContent = `-`
    player1Score.textContent = `Score: ${player1CurrentScore}`
    player2Score.textContent = `Score: ${player2CurrentScore}`
    playerTurn.textContent = `Player 1 Turn`
    player1Turn = true;
    player1Box.classList.remove("display-score")
    player2Box.classList.remove("display-score")
    resetBtn.style.display = "none"
    diceBtn.style.display = "block"
})
