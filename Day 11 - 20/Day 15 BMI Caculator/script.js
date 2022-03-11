const btn = document.querySelector(".btn-style1");
const result = document.querySelector(".result");
const reset = document.querySelector(".btn-style");
let bmi;
btn.addEventListener("click", getBmi);

function getBmi() {
    let height = document.querySelector(".input-h").value;
    let weight = document.querySelector(".input-w").value;
    
    if(height === "" && weight === "" ) {
       return result.innerHTML = "Please enter valid height and weight";
   }
    else if(height === "" || isNaN(height)) {
        return result.innerHTML = "Please enter a valid height";
    }
    else if(weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please enter a valid weight";
    }
    else {
        bmi = ((weight / height / height ) * 10000).toFixed(2);
        getColor();
        result.innerHTML = `${findweight()} ${bmi}`;
    }
}

function findweight () {
    if(bmi < 15) {
        return result.innerHTML = "Underweight:"
    } else if(bmi > 15 && bmi <= 27) {
        return result.innerHTML = "Normal:"
    }
    else {
        return result.innerHTML = "Overweight:"
    }
}

function getColor () {
    if(bmi < 15) {
        result.style.backgroundColor = 'skyblue';
    }
    else if(bmi > 15 && bmi <= 27) {
        result.style.backgroundColor = "green";
    }

    else {
        result.style.backgroundColor = "red"
}
}

// reset.addEventListener("click", () => { This is only going to work if it is been put into a form 
//      document.querySelector("form").reset();
// })
