const input = document.querySelector(".input-txt");
const form = document.querySelector(".form");
const movieList = document.querySelector(".child");

const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=5fdc5fa2d0ee49806a3aa96d23971c45&query=";

const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fdc5fa2d0ee49806a3aa96d23971c45";

const imagePath = "https://image.tmdb.org/t/p/w1280";

async function getMovies (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayMovies(data.results)
}
getMovies(apiURL);

function displayMovies(movies) {

    movieList.innerHTML = "";
    movies.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("greater-child");
        div.innerHTML = `
        <img src="${imagePath + movie.poster_path}" alt="Eren Jaeger">
        <div class="details">
            <h2 class="title">${movie.title}</h2>
            <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
            <p class="overview">
            ${movie.overview}
            </p>
        `
        movieList.appendChild(div);
    })

}
/*
 This is for checking the searching API
async function searchApi () {
    const response = await fetch(searchAPI);
    const result = await response.json();
    console.log(result);
     movieTitle.textContent = result.value.title;
}

searchApi();

async function getInfo () {
    const getFetchApi = await fetchApi();
} 

*/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    movieList.innerHTML = ""

    let inputValue = input.value
    if(inputValue) {
        getMovies(searchAPI + inputValue)
        input.value = "";
    }
});