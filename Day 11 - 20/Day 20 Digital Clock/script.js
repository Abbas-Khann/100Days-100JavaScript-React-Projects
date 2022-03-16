let todaysDate = document.querySelector(".date");
let currentTime = document.querySelector(".currentTime");

// First off let's create a function and get Today's Date

const showDate = () => {
    let days = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    let months = ["Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];
    // To show date we need date, Month and day
    let date = new Date();
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let aajkaDate = date.getDate();
    let year = date.getFullYear();

    //  console.log(day)
    //  console.log(month)
    todaysDate.innerHTML = `${day} ${aajkaDate} ${month} ${year}`
}

function showTime() {
    // Now we will get the time in the currentTime
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Taking the session variable to change between AM and PM
    let session = 'AM'
    // Changing our clock from a 24 hour format to 12 hour format so we can add PM and AM into it as well
    if(hours == 0) {
        hours = 12;
    }
    if(hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }
    // Let's append 0 to single digits
    hours = hours < 10 ? "0" + hours : hours;
    // We're saying if hours is in single digit  1- 9 then concatenate a 0 in hours else keep it as it is
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds
    currentTime.innerHTML = `${hours} : ${minutes} : ${seconds}  ${session}`

}
// setInterval will call this function every 1000 milliseconds which is 1 second so it keeps on updating and shows what's going on the clock
setInterval(showTime, 1000)
showDate();