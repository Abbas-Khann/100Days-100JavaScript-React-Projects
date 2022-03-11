let pounds = document.querySelector(".input-p"),
kilos = document.querySelector(".input-k"),
grams = document.querySelector(".input-g"),
ounces = document.querySelector(".input-o"),
form = document.querySelector("form");

form.addEventListener("input" , convertWeight);
// We will use event delegation, where we are targeting one particular element and then using it's children seperately.
function convertWeight (e) {
    if(e.target.classList.contains("input-p")) {
    let x = e.value;
    // console.log(x);
    kilos.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
    }
    if (e.target.classList.contains("input-k")) {
        let x = e.target.value;
        pounds.value = (x * 2.2046).toFixed(2);
        grams.value = (x * 1000).toFixed(2);
        ounces.value = (x * 35.247).toFixed(2);
    }
    if (e.target.classList.contains("input-g")) {
        let x = e.target.value;
        pounds.value = (x * 0.0022046).toFixed(2);
        kilos.value = (x / 1000).toFixed(2);
        ounces.value = (x * 0.035274).toFixed(2);
    }
    if (e.target.classList.contains("input-o")) {
        let x = e.target.value;
        kilos.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        pounds.value = (x * 0.0625).toFixed(2);
    }

}