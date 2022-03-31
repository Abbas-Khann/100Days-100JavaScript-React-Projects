// let's fetch the component we need to make changes on the DOM
const btn = document.querySelector(".btn"),
tip = document.querySelector(".tip"),
total = document.querySelector(".total"),
error = document.querySelector(".error");

// Here setTimeout will get executed and after 3.5 sec the error will not be shown anymore.
const hideErrors = () => {
    setTimeout(() => {
        error.style.display = "none";
    } , 3500)
}

// We would create a function for tip calculation and this is basically the ES6 way of writing functions.
const calculateTip = () => {
    // lets set the value of input fields for bill and rate variables
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    
    // check if the bill and rate fields are empty or not
    if(bill === "" || rate == "") {
        // console.log("error");
        // if empty we would display error now
        error.style.display = "block";
        // this function would get called and would erase the input message as dhown above in the function body.
        hideErrors();
        
        // we would also perform a check on whether the user input is a number or not.
        //if bill input has a value that is Not-A-Number this block will be executed
    } else if(isNaN(bill)) {
        error.innerHTML = "Please input a number";
        error.style.display = "block";
        hideErrors();
    }
    // finally if we don't have any errors with input we would proceeed to this block of code.
    else {
        let tipAmount = bill * rate;
        // Math.ceil would remove the decimals and make it a whole number 
        // which would return the smallest integer greater than or equal to the given number. i.e (3.4 => 4) and (6.7 => 7)
        tipAmount = Math.ceil(tipAmount);
         tip.innerHTML = `Tip: $${tipAmount}`;
         let totalBill = Number(bill) + tipAmount;
        // here we will update the total with value of the totalBill variable 
         total.innerHTML = `Total : $${totalBill}`;
    }
}

// Our button here would listen for click event and execute the function calculateTip().
// Since we are creating our function with ES6 format, We need to call the function after the function is defined. 
btn.addEventListener("click", calculateTip);
