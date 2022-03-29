let generateBtn = document.querySelector(".btn"),
input = document.querySelector(".input"),
boxes = document.querySelectorAll(".box");
// let box1 = document.querySelector(".box1");

let array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","/","?"];

function generateRandom() {
    // We multiplies it by array.length because we want the range to be the index of array and not just any number but an element from this particular array
    let rand = Math.floor(Math.random() * array.length);
    // Now we have inserted the randomlyGenerated element from the array into the index of the array
    let arrayIndex = array[rand];
    console.log(arrayIndex);
    // We would return the random value that we fetched from the array index
    return arrayIndex;
}


function generatePassword() {
  // Invoking the reset function in the beginning so that the new password doesn't concatenate and instead it generates a new one.
    reset();
  	// We took the inputValue locally because we want the latest user provided password length.
    let inputValue = input.value;
    
    boxes.forEach((item) => {
        item.classList.add("clicked-box")
        // item.textContent = generateRandom();
      // running a loop until the size of the input 
        for(let i = 0; i < inputValue; i++) {
          // Everytime i increments add the generateRandom function, So that it generates a random value to the items (boxes) and displas them. 
            item.textContent += generateRandom();
        }
    })
      
}


// Writing a reset function to reset the values in all of the boxes;
function reset() {
    boxes.forEach((item) => {
      // for each box the content will be reset to none
        item.textContent = "";
        
    })
}

boxes.forEach((div) => {
  // so for each box we would listen for a click event which would copy the password in that particular box to the clipboard.
    div.addEventListener("click", () => {
        navigator.clipboard.writeText(div.textContent);
        alert("Copied to Clipboard  " + div.textContent)
    })
})

