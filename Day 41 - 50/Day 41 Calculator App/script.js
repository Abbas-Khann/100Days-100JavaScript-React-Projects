let inputBox = document.querySelector(".input-num")
let buttons = document.querySelectorAll(".btn")
let screenVal = ""

for (item of buttons) {
    item.addEventListener("click", (e)=> {
        let buttonText = e.target.innerText
        console.log('Button text is ', buttonText)
        if (buttonText === 'x') {
            buttonText = '*'
            inputBox.value = buttonText
        }
         if (buttonText === 'DEL' || buttonText === 'RESET') {
            screenVal = ""
            inputBox.value = screenVal
        }
        else if (buttonText === "=") {
            inputBox.value = eval(screenVal)
        }
        else {
            screenVal += buttonText
            inputBox.value = screenVal
        }

    })
}
