const countdown = document.getElementById("countdown");
let time = 10;
let promoTime = time * 60;

const startCountdown = () => {
    const promoTimer = setInterval(() => {
        if(promoTime <= 0) { // This is if the promo Time has ended
            clearInterval(promoTimer);
            countdown.innerHTML = `Promo Time has ended`;
        } 
        else {
            promoTime--;

            const hours = Math.floor(promoTime / 3600) % 24;
            const minutes = Math.floor(promoTime / 60) % 60;
            const seconds = Math.floor(promoTime % 60);

            countdown.innerHTML = `TIME : ${format(hours)} hrs : ${format(minutes)} min : ${format(seconds)} s`;
        }

    }, 1000);
}

function format (t) {
    if(t < 10){
        return `0${t}`;
    }
    else {
        return t;
    }
    // another way of writing this would be  return t < 10 ? `0${t}` : t;
}
startCountdown();