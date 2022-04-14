let pokeContainer = document.querySelector(".poke-container")


async function getApi(id) {

    let apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`
    let response = await fetch(apiURL)
    let data = await response.json()
    console.log(data)
    // getData(data)
    render(data)
}

async function getID() {
    for (let i = 1; i <= 150; i++) {
        console.log(i)
       await getApi(i)
    }
}

getID()

let pokemonData = ""
function render(data) {
         pokemonData += `<div class = "pokemon" style = "background-color: rgb(222, 253, 224)">
         <div class = "img-container">
             <img src="https://pokemon.snowflakedev.org/img/${data.id}.png" alt="pokemon-image">
             </div>
        <div class="info">
            <span class="number" >#${data.id}</span>
            <h3 class="name">${data.name}</h3>
            <small class="type">Type: <span class="poke-type">${data.types[0].type.name}</span> </small>
        </div>
         </div>`

    pokeContainer.innerHTML = pokemonData

}



// function getData (data) {
//     let pokemonId = data.id
//     id.textContent = `#${pokemonId}`
//     let pokemonName = data.name
//     name.textContent = pokemonName
//     let pokemonType = data.types[0].type.name
//     type.textContent = pokemonType
//     let  pokemonImage = `https://pokemon.snowflakedev.org/img/${pokemonId}.png`
//
//     image = pokemonImage
// }