const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = 0;

    function getCount () {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 200;
        
        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(getCount, 12) // This means run the getCount function after every 10 milliseconds
        }
        else {
            counter.innerText = target;
        }
    }
window.addEventListener("scroll" , () => {
    const scrollHeight = window.pageYOffset;
    const sectionTop = document.querySelector(".top");
    const sectionTopHeight = sectionTop.clientHeight; 
    if(scrollHeight >= sectionTopHeight - 1) {
        getCount();
    }
});
// getCount();
});