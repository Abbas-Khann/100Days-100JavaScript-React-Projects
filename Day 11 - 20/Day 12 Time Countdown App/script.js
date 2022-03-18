// Let's fetch the div element inside which we will display our Timecountdown
const countdown = document.getElementById("countdown");

// Here we are setting the countdown for 10 minutes
let time = 10;

// We need to covert the manually set time value into seconds because this way it's easy to
// make further time converstaion.
let promoTime = time * 60;

const startCountdown = () => {
    const promoTimer = setInterval(() => {
        
        // This is if the promo Time has ended
        if(promoTime <= 0) { 
            clearInterval(promoTimer);
            countdown.innerHTML = `Promo Time has ended`;
        } 
        else {
            // decerement the count by 1 
            promoTime--;
            
            // Conversation of seconds into hours, minutes and seconds
            const hours = Math.floor(promoTime / 3600) % 24;
            const minutes = Math.floor(promoTime / 60) % 60;
            const seconds = Math.floor(promoTime % 60);
            
            // Here we will display the time by setting the values into countdown's innerHTML
            // we would call the format function and pass t as parameter to get the desired time format for 
            //sigle digit time display
            countdown.innerHTML = `TIME : ${format(hours)} hrs : ${format(minutes)} min : ${format(seconds)} s`;
        }

    }, 1000); // 1000, means the promoTimer function will executes after every 1000 milliseconds (i.e. 1 second). 
}

// This funcation is responsible for adding 0 before the digit if the time showing is in single digit. 
// if time is "9 hours" it would show as "09 hours"
// This way it would look better.

function format (t) {
    if(t < 10){
        return `0${t}`;
    }
    else {
        return t;
    }
    // another way of writing this would be  return t < 10 ? `0${t}` : t;
}

// Finally let's make the function call here
startCountdown();
