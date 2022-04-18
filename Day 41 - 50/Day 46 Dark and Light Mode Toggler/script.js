// Let's access the required elements through DOM

let btn = document.querySelector('.dark')

let darkMode = localStorage.getItem('darkMode')


const enableDarkMode = () => {
    document.body.classList.add('dark-mode')
    btn.textContent = 'Light'
    localStorage.setItem('darkMode', 'enabled')
    // passing in a key and a value in the local Storage of our browser
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode')
    btn.textContent = 'Dark'
    localStorage.setItem('darkMode', null)
}

// save darkmode history

if (darkMode === 'enabled') {
    enableDarkMode()
}
// This will stay in darkmode if the browser was refreshed at Dark mode

btn.addEventListener('click', ()=> {
    let darkMode = localStorage.getItem('darkMode')
    console.log(darkMode)
   if (darkMode !== 'enabled') {
       enableDarkMode()
   }
   else {
       disableDarkMode()
   }

})

// if (document.body.classList.contains('dark-mode')) {
//     disableDarkMode()
// }
// else {
//     enableDarkMode()
// }