import React from 'react';
import './App.css';
import Coin from './Coin'
import Table from './Table';


function App() {

    // Here we are setting a useState hooks to change the state of out search-bar and the data recieved from the api

     const [coins, setCoins] = React.useState([]); // initially it will be set to an empty array
     const [search, setSearch] = React.useState("") // initially the search-bar will be set to an empty string



    console.log("coins", coins)
    // We are using the useEffect hook for fetching the data from the api
    React.useEffect(() => {

        async function getApi() {
            let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false")
            let data = await response.json()
            // console.log(data)
            setCoins(data) // here we are changing the state of the coins hook by putting the data into the setCoins functions so after this the coins variable will contain the coin array(data from the api)
        }
    
        getApi() // function call needs to be inside the hook

    }, []) 

    const handleChange = (event) => { // passing an event parameter 
        setSearch(event.target.value) // setting the setSearch function to update the search value and (event.target.value) will target the value inputted inside the box
    }   

    const filteredCoins = coins.filter(coin =>                        // We are storing a new array returned by the filter method based on the search input inside the filteredCoins variable
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    



    return(
        <div className='main-container'>
            <h1 className='heading-1'>Crypto Market</h1>
            <input className='input-box' type="text" placeholder='Provide the coin name' onChange={handleChange} /> {/* The onChange event will call the handle change function  */}
            <Table />
            {/* We will map through the newly fetched array based on the inputted search and for each index which happens to be an object we will return the following data */}
            {filteredCoins.map(coin => {
                
                    return (
                        <Coin 
                        // passing the required props to fetch the required data
                        key={coin.id} 
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        />
                        )
                    })}   
                    

        </div>
    )
}

export default App;
