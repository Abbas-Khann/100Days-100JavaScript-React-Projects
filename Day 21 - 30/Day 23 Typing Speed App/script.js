// Let's look at the requirements of the project
/*
-> We're gonna need to start the timer as soon as the user starts typing
-> We're gonna generate some random text
-> Reset everything after the reset button is clicked
-> Pop up the congratulations message once the text has been typed correctly and give it a green border color and also start the congrats sound effect and also stop the timer.
-> If typed wrongly turn the border color into Red and play the clap sound effect
-> If the user is typing correctly keep the border color blue
*/

// Now let's access things through DOM

let dummyText = document.querySelector("#original-text"),
inputText = document.querySelector(".input-txt"),
inputTextBorder = document.querySelector(".input-txt"),
minutes = document.getElementById("minutes"),
seconds = document.getElementById("seconds"),
resetBtn = document.getElementById("reset-btn"),
congratsMessage = document.querySelector(".para"),
clapSound = document.getElementById("clap"),
congratsSound = document.getElementById("congrats");

const inputTextArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timer = 0;
let min = 0;
let sec = 0;
let interval = 0;
let timeRunning = false;
storeTime = 0;

// Let's create the reset Function which will reset the page after clicking on the reset button

resetBtn.addEventListener('click', () =>{
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    // timeRunning = false;
    minutes.textContent = '00';
    seconds.textContent = '00';
    inputText.value = '';
    congratsMessage.style.display = "none";
    generateRandomText();
    applyColors("steelblue")
})

inputText.addEventListener("keyup", () => {
    let enteredTextLength =  inputText.value.length;
    let enteredText = inputText.value;
    let originalText = dummyText.textContent;
    let partialText = originalText.substring(0, enteredTextLength);
    evaluateText(enteredText, originalText, partialText);
    callTimer(enteredTextLength);
})


function startTimer() {
    timer++;
    
    min = Math.floor((timer / 100) / 60);
    sec = Math.floor((timer / 100) - (min * 60));
    minutes.textContent = (min);
    seconds.textContent = (sec);
}

function callTimer(enteredTextLength) {
    if(enteredTextLength === 1 && !timeRunning) {
        // start the timer
        interval = setInterval(startTimer, 10);
        timeRunning = true;
    }
}

function evaluateText(enteredText, originalText, partialText) {
   if(enteredText === '') {
       applyColors("white")
   }
   else {
       if(enteredText === originalText) {
           applyColors("green");
           congratsMessage.style.display = "block";
           congratsSound.play();
           clearInterval(interval);
       }
       else if (enteredText !== originalText && enteredText !== partialText) {
           applyColors("red");
           clapSound.play();
       }
       else {
        applyColors('blue');
   }
   }
}
// Let's generate the random Text
function generateRandomText() {
    // This will randomly generate a number between 0 to 10 which will be used as an index for our array
    let randIdx = Math.round(Math.random() * 10); 
    console.log(randIdx); // Check to see if a random num was generated
    let randText = inputTextArray[randIdx]; // Now let's set up the randText variable to the array which had the dummy Text and pass the index as a number
    console.log(randText)
    dummyText.textContent = randText;
}
generateRandomText();

// let's create a function for the border colors
function applyColors(color) {
    inputTextBorder.style.borderColor = color;
    inputTextBorder.style.boxShadow = `0 0 10px ${color}`;
}


