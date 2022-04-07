// Let's access elements through DOM

let inputName = document.querySelector(".input-txt")
let dob = document.querySelector(".input-date")
let submitBtn = document.querySelector(".btn")
let resultName = document.querySelector(".heading-2")
let age = document.querySelector(".age")
let year = document.querySelector(".years")
let months = document.querySelector(".months")
let days = document.querySelector(".days")

const monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

submitBtn.addEventListener("click", () => {
    let today = new Date()
    let dobInput = new Date(dob.value)
    console.log(dobInput)
    let birthMonth
    let birthDate
    let birthYear
    // Let's create an object to get the details
    let birthDetails = {
        date: dobInput.getDate(),
        month: dobInput.getMonth() + 1,
        year: dobInput.getFullYear()
    };
    
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1
    let currentDate = today.getDate()

    // let's run some Checks 
    if (birthDetails.year > currentYear || 
        (birthDetails.month > currentMonth &&
        birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && 
            birthDetails.month == currentMonth &&
            birthDetails.year == currentYear)
        )
        {
            alert("Invalid Date!")
            return
        }

        birthYear = currentYear - birthDetails.year

        if (currentMonth >= birthDetails.month) {
            birthMonth = currentMonth - birthDetails.month
        }
        else {
            birthYear--
            birthMonth = 12 + currentMonth - birthDetails.month
        }

        if (currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date
        }
        else {
            birthMonth--
            let days = monthsArray[currentMonth - 2]
            birthDate = days + currentDate - birthDetails.date
        }

        if (birthMonth < 0) {
            birthMonth = 11
            birthYear--
        }

        displayResult(birthDate, birthMonth, birthYear)
})

function displayResult(bD, bM, bY) {
    resultName.textContent = `Name: ${inputName.value}`
    year.textContent = bY + " Years"
    months.textContent = bM + " Months"
    days.textContent = bD + " Days"
}