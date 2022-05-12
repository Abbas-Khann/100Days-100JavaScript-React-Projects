import React from 'react'
import './App.css'
import Header from './components/UI/Header'
import CharacterGrid from './components/Characters/CharacterGrid'
import axios from 'axios'
import Search from './components/UI/Search'

const App = () => {
    // Setting up some hooks to change the state
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    // This hook is used to keep track of the search input or store the values of search input
    const [query, setQuery] = React.useState("")

    // useEffect hook will run the asynchronous function and fetch the data from the api based on the query search
    React.useEffect(() => {
        const fetchItems = async () => {
            const response = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            // const data = await response.json() axios
            console.log(response.data)
            setItems(response.data)
            // setItems(data) if fetch is used instead of axios
            setIsLoading(false)
            // setisLoading wil be set to false once the data is fetched 
        }

        fetchItems()
        // function call


    }, [query]) // The dependancy array is dependent on the query search so the amount of times we input something in the search box useEffect will re exuecute and call the api again and again

    const queryFunc = (value) => { // value is the parameter to the query function so that it can be used in the search file
        setQuery(value) // The setQuery will recieve the value here and will update the query variable
    }

    
    return(
        <main className='container'>

        <Header />
        <Search 
        getQuery={queryFunc}
        // getQuery prop is responsible for executing the queryFunc function 
        // Since here we are passing queryFunc as a prop so that we can use it in the Search file
        
        />
        <CharacterGrid 

        // isLoading and items are passed as props so that they can be used in the CharacterGrid file
        isLoading = {isLoading}
        items = {items}
        
        />

        </main>

    )
}

export default App