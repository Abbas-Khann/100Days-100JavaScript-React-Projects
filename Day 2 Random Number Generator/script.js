const number = document.querySelector(".count");

const btn = document.querySelector(".generate");

btn.addEventListener("click", generateNumber);

function generateNumber() {
    const rand = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = rand;
}