const btn = document.querySelector(".btn-style1");
const result = document.querySelector(".result");
const reset = document.querySelector(".btn-style");
let bmi;

// listening for a click event on button and calling the getBmi function.
btn.addEventListener("click", getBmi);

function getBmi() {
    // as soon as the button gets clicked and this function executes, We would fetch values from both height and weight input field.
    let height = document.querySelector(".input-h").value;
    let weight = document.querySelector(".input-w").value;
    
    // here we would check if both the fields are empty, a message would disply to enter valid input in both the fields
    if(height === "" && weight === "" ) {
       return result.innerHTML = "Please enter valid height and weight";
   }
    // here we would check for eiher the empty field or if the input is a number or not. If one of the conditions is true, We would display a message to enter valid height.
    else if(height === "" || isNaN(height)) {
        return result.innerHTML = "Please enter a valid height";
    }
    // here we would do the same for the weight input field. If the user input is either empty or not a valid number input.
    // If one of the conditions happens to be true we would dispaly a message.
    else if(weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please enter a valid weight";
    }
    // this bloack will executed if we find no errors with input field.
    else {
        // A standard formula to calculate BMI and we would use .toFixed() method to specify how many digits we want after decimal. In our case it's 2 digits only. 
        bmi = ((weight / height / height ) * 10000).toFixed(2);
        // the we will call getColor function and render the result with the help of result variable. 
        getColor();
        // here we would also call findweight function to get the info on the weight level category
        result.innerHTML = `${findweight()} ${bmi}`;
    }
}

// this function would show info on weight level category
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

// this would change the color based on the value of bmi and indicate if the user's provided value is an warning for his/her health condition or not.
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
