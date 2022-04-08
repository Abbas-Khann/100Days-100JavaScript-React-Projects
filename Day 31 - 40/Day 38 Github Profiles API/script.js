// Let's get the required DOM elements

let inputBox = document.querySelector(".child")
let inputTxt = document.querySelector(".input-txt")
let profileImage = document.querySelector("img")
let profileBio = document.querySelector(".bio")
let followersCount = document.querySelector(".followers-count")
let followingCount = document.querySelector(".following-count")
let userRepos = document.querySelector(".repos")
let pinnedProjects = document.querySelector(".pinned-projects")
// let pinnedProjects = document.querySelectorAll(".user-repos")
let userName = document.querySelector(".user-name")

const ApiURL = "https://api.github.com/users/";

// async function getData() {
//     let response = await fetch(ApiURL)
//     let data = await response.json()
//     console.log(data)
//     console.log(data[0].avatar_url)
// }

// getData()


async function getUser(user) {
    try {
    let response = await fetch(ApiURL + user)
    let data = await response.json()
    console.log(data)
    userName.textContent = data.name
    profileImage.src = data.avatar_url
    profileBio.innerHTML = data.bio
    followersCount.innerHTML = data.followers
    followingCount.innerHTML = data.following
    userRepos.innerHTML = data.public_repos
    // pinnedProjects.innerHTML = data.repos_url
    }
    catch (error) {
        if(error.response.status == 404) {
            alert("This account doesn't exist")
            window.location.reload()
        }
    }
}

// getUser()

inputBox.addEventListener("submit", (e)=> {
    e.preventDefault()
    let user = inputTxt.value
    getUser(user)
    console.log(user)
    getRepositories(user)
    document.querySelector(".github-info").style.visibility = "visible"
})

async function getRepositories(userName) {
    try {
    let response = await fetch(ApiURL + userName + "/repos?sort=created" )
    let data = await response.json()

    console.log(data)
    let repoList = ""
    for(let i = 0; i < 5; i++) {
    repoList += `<a href="${data[i].html_url}" target = "_blank">${data[i].name}</a> `
    }
    
    pinnedProjects.innerHTML = repoList
}
catch(error) {
    if(error) {
        alert("This account doesn't exist")
        document.querySelector(".github-info").style.visibility = "hidden"
    }

}
}