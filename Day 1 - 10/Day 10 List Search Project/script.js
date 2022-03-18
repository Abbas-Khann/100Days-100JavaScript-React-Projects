// let's access the input box and List items through DOM.
const input = document.querySelector(".input-txt");

//we would use querySelectorAll to target all <li> elements to search through
const listItems = document.querySelectorAll("li");

// the eventListener "keyup" registers the pressed key when the key/click has been released
input.addEventListener("keyup", searchList);

function searchList() {
    const inputValue = input.value;
    
    // Now we will traverse through all the list items through loop
    for(let i = 0; i < listItems.length; i++) {
        //for each item first we will convert it to lowercase and then .includes will check for whether
        // if it includes the input value(it will check for each keyup register) or not
        if(listItems[i].innerHTML.toLowerCase().includes(inputValue)){
            // if the condition is mate the list items will be displayed on the input box.
            listItems[i].style.display = "";
        }
        else {
            listItems[i].style.display = "none";
        }
    }
}
