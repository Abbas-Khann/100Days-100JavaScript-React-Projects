/* 
Project Requirements
-> Input Box for taking the value
-> Wikipedia API
-> 
*/
const searchInput = document.querySelector(".input-txt"),
searchResults = document.querySelector(".child2"),
errorMsg = document.querySelector("#para"),
btnSubmit = document.querySelector(".btn");

let apiURL =  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

btnSubmit.addEventListener("click", () => {

    let searchValue = searchInput.value;
    if(searchValue === "") {
        errorMessage("Search Cannot be empty, Wtf do you think you're doing")
    } 
    else {
        getResult(searchValue)
    } 

})

function errorMessage(msg) {
    errorMsg.style.display = "block";
    errorMsg.textContent = msg;
}

async function getResult(searchValue) {
    const response = await fetch(apiURL + searchValue)
    const results = await response.json();
    console.log(results)

    // console.log(results) To check the fetched api in the console and see if it's actually working or not.
    if(results.query.search.length == 0) {
        return errorMessage("Invalid Search, Please Enter another search term")
    }
    else {
        displayResults(results);
    }
}

function displayResults(results) {
    let output = "";
    results.query.search.forEach((result) => {
        let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
        output+= `<div class="child2">
        <a href="${resultURL}" class="title">${result.title}</a>
        <a href="${resultURL}" class="link">${resultURL}</a>
        <p class="description">${result.snippet}</p>
        </div> `;
        searchResults.innerHTML = output;
    });

}
