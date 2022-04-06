const startBtn = document.querySelector(".start")
let timeRemaining = document.querySelector(".time-left");
let clickBtns = document.querySelectorAll(".btn");

let gameTime = 4;


function getRandomIndex() {
    let rand = Math.floor(Math.random() * 16)
    // console.log(rand)
    return rand;
}

getRandomIndex()

startBtn.addEventListener("click", startGame)

function startGame() {
    startTimer()
    // resetGame()
    playGame()
}

function startTimer() {
    let gameTimer = setInterval(()=> {

        if(gameTime > 0) {
            gameTime--;
            const seconds = gameTime
            timeRemaining.innerHTML = `${formatTime(seconds)} seconds remaining`
            
        }
        else {
            clearInterval(gameTimer)
            gameTime = 0
            window.location.reload()
            alert("You Lost 👎 The best thing about this game is, It makes you want to kill yourself")

            // startBtn.innerHTML = `Play Again`
            // resetGame()
        }
    }, 1000)
}

function playGame() {
    let specialIndex = getRandomIndex()
    console.log(specialIndex)
    clickBtns.forEach((item, index)=> {
        if(gameTime > 0) {
            item.addEventListener("dblclick", ()=> {
                item.classList.add("clicked-btn")
                if(index === specialIndex) {
                    window.location.reload()
                    alert("YOU WIN 👍")
                }
        })
    }
        else {
            item.classList.remove("clicked-btn")
        }
    })
}

function formatTime(t) {
    if(t < 10) {
        return `0${t}`
    }
    else {
        return t;
    }
}