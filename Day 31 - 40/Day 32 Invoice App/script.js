// Here are the requirements for the javascript Logic
/*
1 -> Array to hold services requested
2 -> Buttons to add service to array
3 -> Place to display data from array - updated everytime the array changed
4 -> Don't charge twice for the same service
5 -> Total cost stays updated
6 -> Reset button to reset everything
*/

// Let's access the elements through DOM
let washBtn = document.querySelector(".wash-car-btn");
let mowBtn = document.querySelector(".mow-lawn-btn");
let pullBtn = document.querySelector(".pull-weeds-btn");

let washSpan = document.querySelector(".wash-span");
let mowSpan = document.querySelector(".mow-span");
let pullSpan = document.querySelector(".pull-span");
let totalCharges = document.querySelector(".total-money");
const resetBtn = document.querySelector(".reset-btn");

let notSelectedWash = true
let notSelectedMowLawn = true
let notSelectedPullWeeds =  true


let servicesArray = [10,20,30]

// 2 solutions 


washBtn.addEventListener("click", () => {
    if(notSelectedWash) {
        washSpan.innerHTML = `$${servicesArray[0]}`;
        totalAmount(servicesArray[0])
    }
    notSelectedWash = false;
})

mowBtn.addEventListener("click", ()=> {
    if(notSelectedMowLawn) {
    mowSpan.innerHTML = `$${servicesArray[1]}`
        totalAmount(servicesArray[1])
    }
    notSelectedMowLawn = false
})

pullBtn.addEventListener("click", ()=> {
    if(notSelectedPullWeeds) {
        pullSpan.innerHTML = `$${servicesArray[2]}`;
        totalAmount(servicesArray[2])
    }
    notSelectedPullWeeds = false
})


let count = 0

function totalAmount (param) {
    count += param
    totalCharges.textContent = count;
}

resetBtn.addEventListener("click" , function reset() {
    washSpan.innerHTML = ""
    mowSpan.innerHTML = ""
    pullSpan.innerHTML = ""
    notSelectedPullWeeds = true
    notSelectedMowLawn = true
    notSelectedWash = true
    count = 0
    totalCharges.textContent = ""
})
