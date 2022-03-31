// Let's fetch all the elements required through DOM
let pounds = document.querySelector(".input-p"),
kilos = document.querySelector(".input-k"),
grams = document.querySelector(".input-g"),
ounces = document.querySelector(".input-o"),
form = document.querySelector("form");

form.addEventListener("input" , convertWeight);

// We will use event delegation, where we are targeting one particular element and then using it's children seperately.
function convertWeight (e) {
    if(e.target.classList.contains("input-p")) {
        
        // with the use of event we are target the particular input field value directly. 
    let x = e.target.value;
        
        // conversion of weight entered in pounds into kilos, grams and ounces.
        // to deal with long decimal value we would use .toFixed(number of decimal we want).
        // now as we are typing the weight in one field we would update the weight in others by specifying vaiable.value
        // here is the standard weight convertion formula from one unit to another
    kilos.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
    }
    //conversion of weight entered in kilos into pounds, grams and ounces.
    if (e.target.classList.contains("input-k")) {
        let x = e.target.value;
        pounds.value = (x * 2.2046).toFixed(2);
        grams.value = (x * 1000).toFixed(2);
        ounces.value = (x * 35.247).toFixed(2);
    }
    //conversion of weight entered in grams into pounds, kilos and ounces.
    if (e.target.classList.contains("input-g")) {
        let x = e.target.value;
        pounds.value = (x * 0.0022046).toFixed(2);
        kilos.value = (x / 1000).toFixed(2);
        ounces.value = (x * 0.035274).toFixed(2);
    }
    //conversion of weight entered in ounces into kilos, grams and pounds.
    if (e.target.classList.contains("input-o")) {
        let x = e.target.value;
        kilos.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        pounds.value = (x * 0.0625).toFixed(2);
    }

}
