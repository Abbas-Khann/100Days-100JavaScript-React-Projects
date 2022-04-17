// First off let's access the elements through DOM

let inputBox = document.querySelector('.search')
let submitBtn = document.querySelector('.submit')
let tempIcon = document.querySelector('.cloudy')
let date = document.querySelector('.date-time')
let temperature = document.querySelector('.temp')
let weather = document.querySelector('.weather')
let tempRange = document.querySelector('.temp-range')
const apiKey = "3bd3f5d17eeaebb5a95fdbc3adbf6c20";
submitBtn.addEventListener('click', getInput)

async function getWeather() {
    let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=metric&appid=${apiKey}`
    let response = await fetch(apiUrl)
    let data = await response.json()
    console.log(data)
    if (data.cod === '404' || data.message === 'city not found') {
            alert('Please Enter a valid city')
        inputBox.value = ""
    }
    displayData(data)   
}

async function getInput(e) {
    e.preventDefault()
    if (e.type === 'click') {
         await getWeather()
        console.log(inputBox.value)
    }

}

function displayData (d) {
    const iconURL = "http://openweathermap.org/img/w/";
    tempIcon.src = iconURL + d.weather[0].icon + ".png";
    let city = document.querySelector('.city')
    city.innerText = `${d.name}, ${d.sys.country}`
    // date.innerText = new Date()
    temperature.innerText = `Temp: ${Math.round(d.main.temp)}°C`
    weather.innerText = `${d.weather[0].main}`
    tempRange.innerText = `Temp Range: ${Math.round(d.main.temp_max)}°C /  ${Math.round(d.main.temp_min)}°C`
    date.innerText = getTime()
}

function getTime() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let t = new Date()
    let day = days[t.getDay()]
    let month = days[t.getMonth() + 1]
    let date = t.getDate()
    let year = t.getFullYear()
    console.log(day, month, date, year)
    return `${day}, ${month} ${date} ${year}`
}