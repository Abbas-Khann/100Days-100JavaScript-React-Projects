// First off let's just access the required stuff through DOM and store them in variables

let cup = document.getElementsByClassName(".cup"), // This is for the mega Cup
remained = document.querySelector(".remained"), // This is for remaining water
litres = document.querySelector("#litres"), // This is for litres
percentage = document.querySelector(".percentage"), // This is for the percentage of water
smallCups = document.querySelectorAll(".cup-small"); // This is for the smaller cups (8)


updateBigCup();  // Calling the function here 

smallCups.forEach((singleCup, index1) => { // Using the forEach method we get particular smaller cups and their indices
    singleCup.addEventListener("click", () => highlightCups(index1)) // then we add and event listener of click which calls the highlightCups function with a parameter of index1
    // console.log(index1)  Check to see if the index1 is returning the indices or not
})
// Here we are defining the highlightCups function
function highlightCups(index1) {
    // The if condition is used to toggle from filled cup to empty cup. -> Without this condition once a cup is filled it can't be emptied again with a click
    if  (smallCups[index1].classList.contains('full') && !smallCups[index1].nextElementSibling.classList.contains('full')) {
        index1--; // Here we decrement the index so that it goes back to the empty state
    }
    smallCups.forEach((singleCup, index2) => { // Index2 is going to be the index for each of them in this loop
        if (index2 <= index1) { 
            singleCup.classList.add("full") // if the condition above is true then fill the clicked cup
        } else {
            singleCup.classList.remove("full") // otherwise empty the clicked cup
        }
    })
    updateBigCup() // function call
}

// This function updates the mega Cup based on the amount of smaller cups drank
function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length; // We are accessing Two classes and storing their length in the fullCups variable
    const totalCups = smallCups.length;  // We are storing the length of small cups which is 8 in the totalCups variable
    //console.log(fullCups)  The amount of filled cups

    // Let's check to see if it's empty or not
    if (fullCups === 0) { 
        percentage.style.visibility = 'hidden'; // if the cups are empty then the percentage should be hidden
        percentage.style.height = 0; // and the height should be set to 0 which means it shouldn't show up
    } else {
        percentage.style.visibility = 'visible'; // Otherwise percentage should be visible
        percentage.style.height = (`${fullCups / totalCups * 330 }px`) // divide the amount of filled cups by total cups(8) and multiply them by the height you set up for the main cup in css
        percentage.innerText = `${ (fullCups / totalCups * 100)}%`; // and the percentage formula be to divide filled cups by the totalCups(8) and multiply them by 100 because that's maximum percentage of the mega Cup
    }
    // Let's check the remaining litres
    if (fullCups === totalCups) { 
        remained.style.visibility = 'hidden'; // If the amount of filled cups is the same as the total Cups then hide the remained variable because it's 100% anyway
        remained.style.height = 0; // and set it's height to 0
    } else {
        remained.style.visibility = 'visible'; // Otherwise make it visible
        litres.innerText = `${2 - (250 * fullCups / 1000)}L` // and litres should print by the this formula which says how many litres are remaining
    }
}