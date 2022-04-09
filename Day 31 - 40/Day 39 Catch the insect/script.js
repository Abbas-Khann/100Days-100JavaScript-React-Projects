// let's access the elements through DOM

let playBtn =  document.querySelector(".play-game-btn")
let fly = document.getElementById("fly")
let mosquito = document.getElementById("mosquito")
let spider = document.getElementById("spider")
let roach = document.getElementById("roach")
let allInsects = document.querySelectorAll(".all-insects")
let gameTime = document.querySelector(".timing")
let playerScore = document.querySelector(".score")

let gameArea = document.querySelector(".third-page")
let screen = document.querySelectorAll(".first-page")
let selectedInsect = {}
let seconds = 0


playBtn.addEventListener("click", ()=> {
    screen[0].classList.add("up")
})

allInsects.forEach((item)=> {
    item.addEventListener("click", ()=> {
        screen[1].classList.add("up")
        const image = item.querySelector("img")
        const src = image.getAttribute("src")
        // gameItem(index)
        selectedInsect = {src}
        createInsect()
        startTime()
    })
})

function getRandomLocation () {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    console.log(x)
    console.log(y)
    return {x, y};
}

function createInsect() {
    // let emptyInsect = ""
    // let insectBody = `<div> <img src = "${source}" alt="insect"> </div>`
    // const  {x, y} = getRandomLocation()
    // insectBody.style.top = `${x}px`
    // insectBody.style.left = `${y}px`
    // console.log("working")
    // gameArea.innerHTML  += insectBody
    
 const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  insect.style.marginTop = `${y}px`;
  insect.style.marginLeft = `${x}px`;
  insect.innerHTML = `<img src="${selectedInsect.src}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener("click", catchInsect);
  gameArea.appendChild(insect);
}

function catchInsect () {
    increaseScore()
    this.classList.add("caught")
    addInsect()
}

let score = 0;
function increaseScore() {
    score++
    playerScore.innerHTML = `Score: ${score}`
    if(score > 50) {
        document.querySelector(".display-message").style.visibility = "visible"
    }
}

function addInsect() {
    setTimeout(createInsect, 1300)
    setTimeout(createInsect, 1000)
}

function startTime() {
    setInterval(increaseTime, 1000)
    
}

function increaseTime() {
    let min = Math.floor(seconds / 60)
    let sec = seconds % 60

    if(min < 10) {
        min = `0${min}`
    }
    else {
        min = `${min}`
    }

    if(sec < 10) {
        sec = `0${sec}`
    }
    else {
        sec = `${sec}`
    }

    gameTime.innerHTML = `Time:${min}:${sec}`
    seconds++
}