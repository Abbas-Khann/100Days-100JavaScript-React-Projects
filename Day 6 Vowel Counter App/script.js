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
  let count = 0;
  let word = input.value.toLowerCase();

  for(let i = 0; i < word.length; i++) {
    let alphabet = word[i];
    if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {
      count++;
    }
  }
  result.innerHTML = `${word.toUpperCase()} has ${count} vowels`;
}
