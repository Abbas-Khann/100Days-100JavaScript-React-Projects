const wrapper = document.querySelector(".wrapper"), // This is targetting the entire wrapper div
selectBtn = wrapper.querySelector(".select-btn"), // This is targeting the Button
options = wrapper.querySelector(".options"), // this is targeting the options available 
searchInp = wrapper.querySelector(".inputt"); // this is targeting the search input


let countries = ["Afghanistan" , "Albania" , "Argentina" , "Australia" , "Bahrain" , "Bangladesh" , "Barbados" , "Belgium" ,"Brazil" , "Canada" , "China" , "Denmark" , "Dominican Republic" , "Eithiopia" , "Ecuador" , "Finland" , "France" , "Germany" , "Hungary" , "Iceland" , "India" , "Indonesia" , "Iran" , "Iraq" , "Italy" , "Japan" , "Malaysia" , "Maldives" , "Morocco" , "Nepal", "Netherlands" ,"Nigeria" , "Norway" ,"Pakistan" ,"Russia" ,"Romania" , "South Africa" ,"Spain" ,"Switzerland" ,"Sri Lanka" ,"Sweden" ,"Thailand" , "Turkey" , "Uganda" , "Ukraine" , "United States" , "United Kingdom" , "Vietnam" , "Zimbabwe"];

function addCountry() {    // We are adding all the countries defined in the countires variable
    options.innerHTML = "";
    countries.forEach(country => {
        // console.log(countries);
        // let li = '<li>${country}</li>';
        // adding each country inside li and inserting all the li inside options tag
        let li = `<li onclick="updateName(this)">${country}</li>`;   // show the selected country
        options.insertAdjacentHTML("beforeend" , li);
    });
}
 addCountry();   // calling the add country function

//  function updateName(selectedLi) {      // Here we show the selected country through the function
//      console.log(selectedLi.innerText);
// }

function updateName(selectedLi) {   
    searchInp.value = ""; 
    addCountry();
    wrapper.classList.remove("active"); // removes the rest of the search list and only shows the wrapper
    selectBtn.firstElementChild.innerText = selectedLi.innerText;  //firstElementChild selects the first element child of selectBtn
}

searchInp.addEventListener("keyup", () => { // Here we are adding an event listener for the search input to find the particular country we are searching for
    // console.log(searchInp.value); checking in the dev tools whether if the input shows up or not is
    let arr = []; // creating an empty array
    let searchedVal = searchInp.value.toLowerCase();
    arr = countries.filter(data =>{
        return data.toLowerCase().startsWith(searchedVal); //.startsWith(searchedVal) will only get those countries that start with user searched word
    }).map(data => `<li>${data}</li>`).join(""); // mapping here returned the country with li and joined them 
    // console.log(arr);
    //Inserting the returned items inside options
    // options.innerHTML =  arr;
    options.innerHTML =  arr ? arr : `<p>OOPS! Country Not Found</p>`; // if array isn't empty, else show the error
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});