// let's access the elements through DOM

// This is mostly hardcoded but the learner using this repo should be able to use more logic it's not too difficult

let pageViews = document.querySelector(".pageviews");
let amount = document.querySelector(".amount");
let inputRange = document.querySelector(".input-range");
let toggleBox = document.querySelector(".toggler");
console.log(pageViews)

/*
Monthly values
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

let monthlyValues = {
    stepOne : {
        view : "10K Pageviews",
        charge: 8.00.toFixed(2)
    },
    stepTwo : {
        view: "50K Pageviews",
        charge: 12.00.toFixed(2)
    },
    stepThree : {
        view: "100K Pageviews",
        charge: 16.00.toFixed(2)
    }, 
    stepFour : {
        view: "500K Pageviews",
        charge: 24.00.toFixed(2)
    },
    stepFive : {
        view: "1M Pageviews",
        charge: 36.00.toFixed(2)
    }
}

let yearlyValues = {
    stepOne : {
        view : "10K Pageviews",
        charge: 6.00.toFixed(2)
    },
    stepTwo : {
        view: "50K Pageviews",
        charge: 9.00.toFixed(2)
    },
    stepThree : {
        view: "100K Pageviews",
        charge: 12.00.toFixed(2)
    }, 
    stepFour : {
        view: "500K Pageviews",
        charge: 18.00.toFixed(2)
    },
    stepFive : {
        view: "1M Pageviews",
        charge: 27.00.toFixed(2)
    }
}
toggleBox.addEventListener("input", (e)=> {
   inputRange.value = 0;
   amount.textContent = `$ ${yearlyValues.stepOne.charge}`
})

inputRange.addEventListener("input", (e) => {
    let stepValue = e.target.value;
    console.log(stepValue)

    if(stepValue == 0) {
        pageViews.textContent = monthlyValues.stepOne.view
        amount.textContent = `$ ${monthlyValues.stepOne.charge}`
        if (stepValue == 0 && toggleBox.checked == true) {
            pageViews.textContent = yearlyValues.stepOne.view
            amount.textContent = `$ ${yearlyValues.stepOne.charge}`
        }
    }
    else if(stepValue == 1) {
        pageViews.textContent = monthlyValues.stepTwo.view
        amount.textContent = `$ ${monthlyValues.stepTwo.charge}`
        if(stepValue == 1 && toggleBox.checked == true) {
            pageViews.textContent = yearlyValues.stepTwo.view
            amount.textContent = `$ ${yearlyValues.stepTwo.charge}`
        }
    }
    else if(stepValue == 2) {
        pageViews.textContent = monthlyValues.stepThree.view
        amount.textContent = `$ ${monthlyValues.stepThree.charge}`
        if(stepValue == 2 && toggleBox.checked == true) {
            pageViews.textContent = yearlyValues.stepThree.view
            amount.textContent = `$ ${yearlyValues.stepThree.charge}`
        }
    }
    else if(stepValue == 3) {
        pageViews.textContent = monthlyValues.stepFour.view
        amount.textContent = `$ ${monthlyValues.stepFour.charge}`
        if(stepValue == 3 && toggleBox.checked == true) {
            pageViews.textContent = yearlyValues.stepFour.view
            amount.textContent = `$ ${yearlyValues.stepFour.charge}`
        }
    }
    else if(stepValue == 4) {
        pageViews.textContent = monthlyValues.stepFive.view
        amount.textContent = `$ ${monthlyValues.stepFive.charge}`
        if(stepValue ==  4 && toggleBox.checked ==  true) {
            pageViews.textContent = yearlyValues.stepFive.view
            amount.textContent = `$ ${yearlyValues.stepFive.charge}`
        }
    }
})