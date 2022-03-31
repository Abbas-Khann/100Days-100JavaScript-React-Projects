let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let playerName = "Abbas: ";
// let playerChips = 145;
let playerEl = document.getElementById("player");


let player = {
    name: "Abbas: ",
    chips: 145
};
playerEl.textContent = player.name + player.chips;

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    // Generate two random numbers
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard + secondCard];
    sum = firstCard + secondCard;
    // Re-assign the cards and sum variables so that the game can start
    renderGame()

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true;
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

    if(isAlive === true && hasBlackJack === false) { 
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}