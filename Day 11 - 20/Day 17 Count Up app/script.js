// With .queryselectorAll() we will fetch all the elements that matches with that className selector
const counters = document.querySelectorAll(".counter");
// console.log(counters) [if you would console this you would find list of all the nodes that has counter class on it i.e. much like an array of divs in this case.]

// now that we have the list of all the divs we would apply forEach() method and for each div set the value to 0 for now.
counters.forEach((counter) => {
    counter.innerText = 0;

    // we have already set the target number we need to for each element in the html. Here we would just use them.
    function getCount () {
        // here we would get the target value and make it start to increment
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        //here we would increment the count with 200miliseconds passtime.
        const increment = target / 200;
        
        // If the count i.e the innertext value is less than the target value(the number we want out count effect to go up to), We would start rendering the data now.
        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(getCount, 12) // This means run the getCount function after every 10 milliseconds
        }
        else {
            counter.innerText = target;
        }
    }
    
    // here we want the count numbers to start take effect only when we scroll to the point where we can see that section.
    // So we will add scrol eventlistener to window object itself.
window.addEventListener("scroll" , () => {
    // In order to get the height of how much have we scrolled from the topleft corner we would call pageYOffset property.
    const scrollHeight = window.pageYOffset;
    const sectionTop = document.querySelector(".top");
    // here we woudld get the viewable height of sectionTop i.e. the height where we can see our count numbers on the page.
    const sectionTopHeight = sectionTop.clientHeight; 
    // here If we have scrollHeight more than or equal to from where we starts to see the count section we would start the counter effect by calling getCount function.
    if(scrollHeight >= sectionTopHeight - 1) {
        getCount();
    }
});
// getCount();
});
