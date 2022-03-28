// Let's access the elements through DOM

const jobTitle = document.querySelector(".job-title");
const cursor = document.querySelector(".cursor");

let wordArray = ["Doctor","Yoga Instructor","Professor", "Tera Baap"];

// Will represent the indices of the wordArray mentioned above
let wordArrayIndex = 0;
let letterIndex = 0;
// Will represent the letters of a particular word

let typingDelay = 200;
let newWordDelay = 2000; // 2000 milliseconds which is 2 seconds
let removalDelay = 200; 

function printLetters () {
    if(letterIndex < wordArray[wordArrayIndex].length) {
        jobTitle.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
        setTimeout(printLetters, typingDelay);
        letterIndex++;
        console.log(letterIndex);
    }
    else {
        setTimeout(EraseText ,removalDelay);
    }
    
}

function EraseText() {
    if(letterIndex > 0){
        jobTitle.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(EraseText ,removalDelay);
    }
    else {
        wordArrayIndex++;
        if(wordArrayIndex >= wordArray.length) {
            wordArrayIndex = 0;
        }
        setTimeout(printLetters, newWordDelay);
   }
}

printLetters();
