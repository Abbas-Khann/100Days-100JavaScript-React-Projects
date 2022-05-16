import React from 'react';
import './App.css';
import SingleCard from './Components/SingleCard';
// First off let's create an array of cards where each item in the array will point to a specific image source in the array
const cardImages = [
  { "src" : "/img/helmet-1.png" , 
  matched: false,
},
  { "src" : "/img/potion-1.png" , 
  matched: false, 
},
  { "src" : "/img/ring-1.png" , 
  matched: false, 
},
  { "src" : "/img/scroll-1.png" , 
  matched: false, 
},
  { "src" : "/img/shield-1.png" , 
  matched: false, 
},
  { "src" : "/img/sword-1.png" , 
  matched: false, 
}
]
function App() {

  // let's set up some state
  const [cards, setCards] = React.useState([])
  const [turns, setTurns] = React.useState(0)
  // To compare the two cards whether if they match or not we will use two more states
  const [choiceOne, setChoiceOne] = React.useState(null)
  const [choiceTwo, setChoiceTwo] = React.useState(null)
  const [disabled, setDisabled] = React.useState(false)

  // shuffle cards
  const shuffleCards = () => {
    // we have destructed the cardImages array twice so we can get two copies of this array which consists of the images
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random() }))
    // after destructuring we will use the sort method to sort the cards and then it will fire a function which will
    // generate a Random value between .5 and -5 if the randomly generated value turns out to be positive then 
    // the sequence of the pair of cards will flip otherwise it will stay the same
    // and then we will map through all the cards and for each card we will generate a random id
    setCards(shuffledCards)
    // setting up the state to setCards
    setTurns(0)
  }
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  // console.log(cards, turns)
  console.log("ChoiceOne", choiceOne, "choiceTwo", choiceTwo)

  // Here we will check the choices 
  React.useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if(card.src === choiceOne.src || card.src === choiceTwo.src) {
              return {
                ...card,
                 matched: true
              } 
            }
            else {
              return card
            }
          })
        })
        // console.log("Choice one and Choice two are the same")
        resetTurn()
      }
      else {

        // console.log("Choices are not the same")
        setTimeout(() => resetTurn() , 1000)
      }
    }

  }, [choiceOne, choiceTwo])

  console.log(cards)
    
  
  React.useEffect(() => {
      shuffleCards()
  }, [])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    console.log("Turns", turns)
    setDisabled(false)
  }

  

  return (
    <main className="App">
        <h1 className='header'>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className='card-grid'>
          {cards.map((card => {
            return <SingleCard
             key = {card.id} 
             card = {card}
             handleChoice = {handleChoice}
             flipped = {card === choiceOne || card === choiceTwo || card.matched}
             disabled= {disabled}
             />
          }))}
          </div>
          <p className='turns'>Turns: {turns}</p>
    </main>
  )
}

export default App;
