// const btn = document.querySelector(".btn");

// const result = document.querySelector(".para");

// let word = document.querySelector(".input-txt");

// btn.addEventListener("click" , checkVowel);

// function checkVowel() {
//       let vowelCount = 0;
//       let wordVal = word.value.toLowerCase();
//       //alert(wordVal);

//       for(i = 0; i < wordVal.length; i++) {
//           let letter = wordVal[i];
//         if(letter.match(/([a e i o u])/)) {
//             vowelCount++;
//           }
//       }
//       result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
// }
let input = document.querySelector(".input-txt");

const checkBtn = document.querySelector(".btn");

const result = document.querySelector(".para");

checkBtn.addEventListener("click" , vowelChecker);

function vowelChecker () {
  let count = 0; // In order to store the count of vowel we will first declare a count variable with initial value of 0.
  let word = input.value.toLowerCase(); // as user can pass input in any form we will convert it to lowercase to avoid any error while executing programm.

  // let's create a for loop to go through all the letters in the input word.
  for(let i = 0; i < word.length; i++) { // .length will make the loop execute up untill it's length only
    let alphabet = word[i];  // [i] will have one letter inside it at a time and store it into the variable alphabet.
    
    // here we will check if particlar letter i.e.(alphabet) matches with any one of the letters provided below. If it matches, the condition will become true and we will 
    // update the count variable with +1. 
    if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {
      count++;
    }
  }
  // and now we can finaly display the result.
  result.innerHTML = `${word.toUpperCase()} has ${count} vowels`;
}
