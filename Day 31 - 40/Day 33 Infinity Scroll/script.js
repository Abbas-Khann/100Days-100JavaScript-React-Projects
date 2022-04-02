const api_Access_Key = "v1yaYbIFr-zOjPQemxF4IhRaAA2Kp9bjk8h2Olu4ZiY"
let initialCount = 30
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${api_Access_Key}&count=${initialCount}&query=bigcats`
let imageContainer = document.querySelector(".image-container")
let resultArray = []
let image = document.querySelector(".image")

// function display() {
//     let htmlLink = resultArray[0].links.html
//     let urlLink = resultArray[0].urls.regular
//     let urlLinkSmall = resultArray[0].urls.thumb
//     let anchor = `<a href=${htmlLink} target = "_blank"> ${htmlLink} </a>`
//     imageContainer.innerHTML += `<img src="${urlLinkSmall}" alt=""img-here>`
// }

async function getUnsplashAPI() {
    let response = await fetch(apiURL)
    let resultArray = await response.json()
    // console.log(resultArray[0].urls.regular)
    // console.log(resultArray[0].links.html)
    console.log(resultArray)

    // let htmlLink = resultArray[0].links.html
    // let urlLink = resultArray[0].urls.regular
    // let urlLinkSmall = resultArray[0].urls.thumb
    let images = ""
    resultArray.forEach(element => {
        imageContainer.innerHTML += `<img
        src="${element.urls.thumb}" alt=""img-here>
        `
        images +=`<a href=${element.links.html} target = "_blank"> <img src="${element.urls.small}" alt= "Dog-image"</a>`
    });
    imageContainer.innerHTML = images
}

getUnsplashAPI() 