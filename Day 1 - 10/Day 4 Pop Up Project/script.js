// First let's create some variables

const modal = document.querySelector(".modal");

const close =  document.querySelector(".close");

const btn =  document.querySelector(".btn");

btn.addEventListener("click" , openModal);

// here when we click on close icon it will call the closeModal function to close the popup.
close.addEventListener("click" , closeModal);

// here we are calling the closeModal function again so that the modal popup can be closed also when we click outside the popup box.
modal.addEventListener("click", closeModal);


function openModal(e) {
    // we need to use event(e) parameter to prevent the page from refreshing.
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
