// The new year countdown application

// this is our New Year Date
const countTo = "1 Jan 2023";

// in order to display the time with every second changes we will use setInterval method and
//pass 1000 milliseconds (1 second) which will call the function after every 1 second.
const  c = setInterval(() => {
    
    // We will use Date() object to set our newyeardate date
    const endDate = new Date(countTo);
    const currentDate = new Date();
    
    // Date() object returns the time as milliseconds from 1970 till now, 
    // So we will get the difference of milliseconds from endDate(newyeardate) and the currentdate and
    // now that we have the remianing time, We will divide it by 1000 to get the time in seconds.
    const totalSeconds = (endDate - currentDate) / 1000; // This is to get the total number of seconds remaining
    
    // Coversion of Seconds into Days, Hours, Minutes and second.
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Now we will access the element through DOM
    const countDown = document.getElementById("countdown");
    countDown.textContent = `${days}Days : ${hours}Hrs : ${minutes}Min : ${seconds}s`;

    // If the countdown is ended this condition will excute.
    if(totalSeconds < 0) {
        clearInterval(c);
        countDown.textContent = "Happy New Year!";
    }

}, 1000);
