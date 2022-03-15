const btn = document.querySelector(".butt");

const result = document.querySelector(".result");

//btn.addEventListener("click" , checkPalindrome);

const checkPalindrome = () => {
    // We will take the value inside the input box by using .value.
    const word = document.querySelector(".input").value;
    
    // .length will give us the length of the word 
    let len = word.length;
    // memo // madam -> length = 5
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase(); // this will give us the ma( first part of madam )
    //console.log(start);
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase(); // this will give us the last part. We only need first half and last half of the string, 
    // So if a string includes odd number of characters that odd one will get neglected since we don't need that particular character. 
  
    // console.log(end);
    // so far we have, start => ma
    // end => am"
    // we need to flip the end part (am) so that we can futher check the condition for palindrome or not
    // [...end] is a spread operator that will return [a, m] and 
    // .reverse() will make it as [m, a] and...
    // .join("") will join it back again into string form wihtout any space.
    // so the flip would become ma now  
    const flip = [...end].reverse().join("");
    // const flip = end.split("").reverse().join("");

    if(start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    }
    else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
}
btn.addEventListener("click" , checkPalindrome);
