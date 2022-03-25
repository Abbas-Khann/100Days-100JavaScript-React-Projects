// First off let's access the required objects through DOM

let header = document.querySelector(".heading2"),
children = document.querySelectorAll(".children"),
red = document.querySelector(".red"),
blue = document.querySelector(".blue"),
yellow = document.querySelector(".yellow"),
green = document.querySelector(".green");

const blueSound = document.getElementById("blueSound"),
redSound = document.getElementById("redSound"),
yellowSound = document.getElementById("yellowSound"),
greenSound = document.getElementById("greenSound");


console.log(children)
let started = false;
let computer = 0;
let computerState = [];
let color;
let colorIndices = ["blue" , "green" , "yellow" ,"red"];
                 //  0      ,   1     ,   2      ,  3
let rememberColors = [];

window.addEventListener("keyup", () => {
    if(!started) {
        started = true;
        showWhite();
    }
    else {
        
        showWhite();
    }
});

children.forEach(child => {
    color = generateRandom();
    rememberColors.push(color);
})

console.log(rememberColors)


function showWhite() {
    let element = document.querySelector(`.${rememberColors[0]}`);
    element.classList.add("color");
    blueSound.play();
    setTimeout(() => {
      element.classList.remove("color");
      setTimeout(() => {
        element = document.querySelector(`.${rememberColors[1]}`);
        element.classList.add("color");
        yellowSound.play();
        setTimeout(() => {
          element.classList.remove("color");
          setTimeout(() => {
            element = document.querySelector(`.${rememberColors[2]}`);
            element.classList.add("color");
            redSound.play();
            setTimeout(() => {
              element.classList.remove("color");
              setTimeout(() => {
                element = document.querySelector(`.${rememberColors[3]}`);
                element.classList.add("color");
                greenSound.play();
                setTimeout(() => {
                  element.classList.remove("color");
                  setTimeout(() => {
                    window.location.reload(true);
                  }, 280)
                }, 500);
              }, 100);
            }, 500);
          }, 100);
        }, 500);
      }, 100);
    }, 500);
  }



function generateRandom() {
    let rand = Math.floor(Math.random() * 4);
    // console.log(rand);
    let indices = colorIndices[rand];
    // console.log(indices);
    return indices;
}
