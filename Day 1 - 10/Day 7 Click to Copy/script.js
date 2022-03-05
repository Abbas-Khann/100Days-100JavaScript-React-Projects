
// const input = document.querySelector(".input-txt");

// const btn = document.querySelector(".btn");


// const myFunction = () => {
//     //input.select();
//     //input.setSelectionRange(0, input.value.length);
//     // input.setSelectionRange(0, input.value.length);
//     //console.log("input");
//     //document.execCommand("copy");
//     let copyText = document.querySelector(".input-txt");
//     copyText.select();
    
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
//     alert("Copied the Text" + copyText.value);
// }


// btn.addEventListener("click", () => myFunction());



const btn = document.querySelector(".btn");
const input = document.querySelector(".input-txt");

btn.addEventListener("click", copyText);

function copyText () {
    input.select();
    //input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);
    alert("Copied to Clipboard");
}