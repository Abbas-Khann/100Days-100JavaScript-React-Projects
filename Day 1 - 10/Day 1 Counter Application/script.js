// Let's work on something

const count = document.querySelector(".count");

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const reset_count = document.querySelector(".reset");

// Let's add an EventListener. which will listen to the click event and increments the count.
add.addEventListener("click", () => {
    count.innerHTML++;
    changeColor();
});

// Let's add an EventListener. which will listen to the click event and decrements the count.
subtract.addEventListener("click", () => {
    count.innerHTML--;
    changeColor();
});

// Let's add an EventListener, which will listen to the click event and resets the count (i.e 0).
reset_count.addEventListener("click", () => {
    count.innerHTML = 0;
    changeColor();
})

// Let's create a function and change color based on different conidtions matches.
function changeColor() {
    if (count.innerHTML < 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML > 0) {
        // here we can change the color of element by using (element.style.color = "colorname");
        count.style.color = "black"
    } else {
        count.style.color = "white";
    }
}
