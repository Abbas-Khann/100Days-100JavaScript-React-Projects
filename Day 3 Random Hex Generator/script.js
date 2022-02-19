let hex = document.querySelector('.count');

let btn = document.querySelector('.reset');


const changeColor = () => {
    const rand = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor ='#' + rand;
    hex.innerHTML = "#" + rand;
}
btn.addEventListener("click", changeColor);

changeColor();