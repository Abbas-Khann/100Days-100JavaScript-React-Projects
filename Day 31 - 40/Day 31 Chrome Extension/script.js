let myLeads = [];
let inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Here's how you can check if the variable is giving a truthy or a falsy value
// leadsFromLocalStorage = Boolean(leadsFromLocalStorage)
// console.log(leadsFromLocalStorage);

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    ulEl.innerHTML = '';
})

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        render(myLeads);
    })
})

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);
}

saveBtn.addEventListener("click", () =>{

    // console.log(myLeads)
        myLeads.push(inputEl.value);
        // Empty the inputEl value if the previous value is inputted already
        inputEl.value = "";
// Here's how you can store your data in the local storage database
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
// First of you set the Items value  and then convert it into string since localStorage only accepts string values and insert the myLeads array inside of it
        // console.log(localStorage.getItem("myLeads"));
// In the second step you are supposed to get the item you set in the code above 
        // localStorage.clear();
        // console.log(typeof myLeads)
        // In order to get the data back in the array format we need to use JSON.parse on getItem
    // let leadsData = JSON.parse(localStorage.getItem("myLeads"));
    // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    // console.log(typeof leadsData);

    render(myLeads)

})

function render(leads) {
    let listItems = ""
    for(let i = 0; i < leads.length; i++) {
        // listItems += "</li> <a href = '#' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li> 
        <a href = '${leads[i]}' target='_blank'> ${leads[i]} </a>
        </li>`
    }
    ulEl.innerHTML = listItems;
}




// JSON -> Javascript object notation