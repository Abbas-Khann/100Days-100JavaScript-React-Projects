let inputNum = document.querySelector(".input-num"),
inputSize = document.querySelector(".input-size"),
inputChar = document.querySelector(".input-char"),
clearBtn = document.querySelector(".btn");

function getCharOption() {
    return inputChar.options[inputChar.selectedIndex].text;
}

function getStepOption() {
    return parseInt(inputSize.value)
}

function seperate() {
    let values = ["0", "1" , "2" , "3" , "4" , "5", "6" , "7" , "8" , "9"];
    let value = inputNum.value;

    let newValue2 = "";

    for(let i = 0; i < value.length; i++) {
        if(values.includes(value[i])) {
            newValue2 += value[i];
        }
    }

    value = newValue2;
    console.log(value);

    let stepLength = getStepOption();
    let char = getCharOption();

    let newValue = "";
    let rememberStepLength = stepLength; // 4

    for(let i = 0; i < value.length; i++) {
        if(rememberStepLength == 0) {
            newValue += char;
            rememberStepLength = stepLength;
        }
        if(values.includes(value[i])) {
            newValue += value[i];
        }
        rememberStepLength--;
    }
    value = newValue;
    inputNum.value = value;
}



inputNum.addEventListener("input" , () =>{
    seperate();
})

inputChar.addEventListener("input", () =>{
    seperate();
})

inputSize.addEventListener("input", () =>{
    seperate();
})

clearBtn.addEventListener("click", () =>{
    inputNum.value = 1;
    inputChar.value = 0;
    inputSize.value = 4;
})
