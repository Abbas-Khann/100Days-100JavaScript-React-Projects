const joke = document.getElementById("para");
const btn = document.querySelector(".btn");
const jokeId = document.querySelector("#joke-id");
const jokeCategory = document.querySelector("#joke-category");
const api = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

async function getJoke() {
    let response = await fetch(api); // fetch the api before moving forward
    // console.log(response); Here we can see the response 
    let data = await response.json(); // In order to see it in human readable form we need to convert that data into a JSON format
    console.log(data);  // Here we could see the joke being generated in our console
    joke.innerHTML = data.value.joke;
    jokeId.innerHTML = `Joke ID: ${data.value.id}`;
    if(data.value.categories.length == [0]) {
        const noJoke = "lame";
        jokeCategory.innerHTML = `Joke Category: ${noJoke}`
    }
    else {
    jokeCategory.innerHTML = `Joke Category: ${data.value.categories}`;
    // categories can be used to get the category of the joke
    }
}



















/*
btn.addEventListener("click" , () => { //// whenever you use the fetch api a promise is returned
 fetch(api).then(response => {
     return response.json(); // returning the response in JSON format here
 }).then((data) => {
     joke.innerHTML = data.value.joke;
 });
})
*/
