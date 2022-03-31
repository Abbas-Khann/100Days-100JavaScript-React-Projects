const joke = document.getElementById("para");
const btn = document.querySelector(".btn");
const jokeId = document.querySelector("#joke-id");
const jokeCategory = document.querySelector("#joke-category");
const api = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

// When we deal with API data we want our function to work seamlessly, thus we would make function async and it will return a promise.
async function getJoke() {
    // fetch the api before moving forward
    let response = await fetch(api); 
    // console.log(response); Here we can see the response 
    // In order to see it in human readable form we need to convert that data into a JSON format.
    let data = await response.json(); 
    
    // Here we could see the joke being generated in our console
    console.log(data);
    // let's get the joke and render it to joke variable 
    joke.innerHTML = data.value.joke;
    // an extra feature we have added :) let's get the joke id as well for that particular joke which can be seen in the api after you console the data in line 18
    jokeId.innerHTML = `Joke ID: ${data.value.id}`;
    
    // we also want to get the category for that joke but the joke we get sometimes doesn't have any catogory.
    // So we would provide a condition, If the category property has no value which means the length is 0 we would just display "lame" as category.
    if(data.value.categories.length == [0]) {
        const noJoke = "lame";
        jokeCategory.innerHTML = `Joke Category: ${noJoke}`
    }
    // if the joke has any category we would display that category value only. 
    else {
    jokeCategory.innerHTML = `Joke Category: ${data.value.categories}`;
    // categories can be used to get the category of the joke
    }
}


 // Here's how this project would work if we didn't use asynchronous functions
/*
btn.addEventListener("click" , () => { //// whenever you use the fetch api a promise is returned
 fetch(api).then(response => {
     return response.json(); // returning the response in JSON format here
 }).then((data) => {
     joke.innerHTML = data.value.joke;
 });
})
*/
