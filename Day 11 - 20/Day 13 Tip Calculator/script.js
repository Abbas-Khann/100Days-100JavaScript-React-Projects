const btn = document.querySelector(".btn"),
tip = document.querySelector(".tip"),
total = document.querySelector(".total"),
error = document.querySelector(".error");

const hideErrors = () => {
    setTimeout(() => {
        error.style.display = "none";
    } , 3500)
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if(bill === "" || rate == "") {
        // console.log("error");
        error.style.display = "block";
        hideErrors();
    } else if(isNaN(bill)) {
        error.innerHTML = "Please input a number";
        error.style.display = "block";
        hideErrors();
    }
    else {
        let tipAmount = bill * rate;
        tipAmount = Math.ceil(tipAmount);
         tip.innerHTML = `Tip: $${tipAmount}`;
         let totalBill = Number(bill) + tipAmount;
         total.innerHTML = `Total : $${totalBill}`;
    }
}
btn.addEventListener("click", calculateTip);