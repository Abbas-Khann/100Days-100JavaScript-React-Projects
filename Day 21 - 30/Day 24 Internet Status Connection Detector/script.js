/*
Let's have a look at all the requirements if this project
-> First off we need to access everything through DOM
-> We need to display Online and offline after the connection goes off and on
-> We need to fetch an online image in order to see whether this works if actual internet is connected or disconnected
-> We also need to display different images once the connection goes off and on on the window through BOM
*/

const image = document.getElementById('image');
const connectionStatus = document.getElementById("status");
const backgroundColor = document.querySelector("#main");

function setColor() {
    // fetching the online class from CSS
    backgroundColor.classList.add("online");
    
}

// Now to check if the connection is actually Working or not

async function statusCheck() {
    try {
    const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date()). getTime());
    // alert("working");
    image.src = "./images/online.png"
    setColor()
    return fetchResult.status >= 200 && fetchResult.status < 300;   
}
    catch (error) {
        console.log(error);
        connectionStatus.textContent = "OOPS! Your Connection is Down."
        image.src = "./images/offline.png"
        backgroundColor.classList.remove("online");
    }
}

// Monitor the connection itself and run an SetInterval function to actually see if the statusCheck function

setInterval(async () => {
    const result = await statusCheck(); 
    if (result) {
        connectionStatus.textContent = "You're Online!!! Connection looks stable."
        setColor();
    }
}, 5000);


// Now let's use BOM and check the connection as soon as the page loads

window.addEventListener("load", async () => {
    if(statusCheck() ) {
        connectionStatus.textContent = "Online"
    }

    else {
        connnectionStatus.textContent = "Offline"
    }
    
})

statusCheck()