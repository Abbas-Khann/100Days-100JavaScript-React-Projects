import React from 'react'
import './App.css';
import Header from '../src/Components/Header'
import Card from './Components/Card';

const App  = () => {
    const [cards , setCards] = React.useState([])
    const [inputValue, setInputValue] = React.useState('')


    React.useEffect(() => {
      const url = `https://pixabay.com/api/?key=15022306-045466ab71e34bd0c85c38dab&q=${inputValue}`
       const getApiData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setCards(data.hits)
       } 
       getApiData()  
      
    }, [inputValue])

  return (
    <div className="App">
        <Header 
        inputValue = {inputValue}
        setInputValue = {setInputValue}
        />
        <Card 
        cards = {cards}
        />
    </div>
  )
}

export default App;
