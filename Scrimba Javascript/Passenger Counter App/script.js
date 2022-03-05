const countElement = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
// let saveEl = document.getElementById("save-el");
// let count be 0 in plain english.

// All of them will work.
// document.getElementById("count-el").textContent = 5;
// document.getElementById("count-el").innerHTML = 5;

// The innerText propert returns just the text content of an element and all it's children.

// The innerHTML returns the text content of the element, including all spacing and inner HTML tags.

// The textContent of the element and all descendaces, with spacing and CSS hidden text, but without the tags.

function increment() {
    count++;
    countElement.textContent = count;
}

// DOM (DOCUMENT OBJECT MODEL)
// Everything you use to modify a website

// Document -> Because what you're interacting with is an HTML document
// Object is because the document keyword in JS is of the datatype object -> meaning they've taken that HTML document and shoved it into an object
// Model as in a model or a demo/Representation

function save() {
    let countString = count + " - ";
    saveEl.textContent += countString;
    countElement.innerHTML = 0;
    count = 0;
    // console.log(count);
}
save();