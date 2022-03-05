// Let's work on something

const count = document.querySelector(".count");

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const reset_count = document.querySelector(".reset");


add.addEventListener("click", () => {
    count.innerHTML++;
    changeColor();
});

subtract.addEventListener("click", () => {
    count.innerHTML--;
    changeColor();
});

reset_count.addEventListener("click", () => {
    count.innerHTML = 0;
    changeColor();
})

function changeColor() {
    if (count.innerHTML < 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML > 0) {
        count.style.color = "black"
    } else {
        count.style.color = "white";
    }
}