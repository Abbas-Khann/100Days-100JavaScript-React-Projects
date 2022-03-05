const input = document.querySelector(".input-txt");
const listItems = document.querySelectorAll("li");

input.addEventListener("keyup", searchList);

function searchList() {
    const inputValue = input.value;
    for(let i = 0; i < listItems.length; i++) {
        if(listItems[i].innerHTML.toLowerCase().includes(inputValue)){
            listItems[i].style.display = "";
        }
        else {
            listItems[i].style.display = "none";
        }
    }
}