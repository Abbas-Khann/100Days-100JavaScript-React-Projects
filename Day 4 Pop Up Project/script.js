// First let's create some variables

const modal = document.querySelector(".modal");

const close =  document.querySelector(".close");

const btn =  document.querySelector(".btn");

btn.addEventListener("click" , openModal);
close.addEventListener("click" , closeModal);
modal.addEventListener("click", closeModal);


function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}