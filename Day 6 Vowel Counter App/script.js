const btn = document.querySelector(".btn");

const result = document.querySelector(".para");

let word = document.querySelector(".input-txt");

btn.addEventListener("click" , checkVowel);

function checkVowel() {
      let vowelCount = 0;
      let wordVal = word.value.toLowerCase();
      //alert(wordVal);

      for(i = 0; i < wordVal.length; i++) {
          let letter = wordVal[i];
        if(letter.match(/([a e i o u])/)) {
            vowelCount++;
          }
      }
      result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}