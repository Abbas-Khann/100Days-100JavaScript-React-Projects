// const count = document.querySelector(".count");

// const input = document.querySelector(".input-txt");

// input.addEventListener("keyup" , () => {
//     count.innerHTML = input.value.length;
// });

let count = document.querySelector(".count");

const input = document.querySelector(".input-txt");

input.addEventListener("keyup" , findCharCount);

function findCharCount(e) {
        count.innerHTML = input.value.replace(/ /g, "").length;
}
