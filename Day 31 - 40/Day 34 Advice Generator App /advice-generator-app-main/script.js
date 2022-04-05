// Let's access the elements through DOM

let adviceID = document.getElementById("advice-id");
let result = document.getElementById("result");
let dice = document.getElementById("dice-image");


let apiURL = "https://api.adviceslip.com/advice";
dice.addEventListener("click", getAdvice)

async function getAdvice() {
    let response = await fetch(apiURL);
    let data = await response.json();
    console.log(data)
    render(data)
}

function render(id) {
    let fetchId = id.slip.id
    console.log(fetchId)
    adviceID.textContent = `Advice # ${fetchId}`
    let fetchAdvice = id.slip.advice
    result.innerHTML = fetchAdvice
}

// getAdvice()