import React, { useState, useEffect } from 'react'
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

const App = () => {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    const allHeld = dice.every((die) => {
      return die.isHeld
    })
    
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => {
      return die.value === firstValue
    })

    if(allHeld && allSameValue) {
      setTenzies(true)
    }


  }, [dice])
  
  function generateNewDie() {
    const rand = Math.floor(Math.random() * 6 + 1)
    return {
      value: rand,
      isHeld: false,
      id: nanoid()
     }
  }

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  const rollDice = () => {
    if(!tenzies) {
      setDice(oldDice => oldDice.map((die) => {
        return die.isHeld ?
         die :
        generateNewDie()
      }))
    }
    else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

const holdDice = (id) => {
      // console.log(id)
      setDice(prevState => prevState.map((die) => {
        return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
      }))
}

  // mapping through all the 10 elements so that we can render them dynamically
  const diceElements = dice.map((die) => {
    return <Die
    key={die.id} 
    value={die.value}
    isHeld={die.isHeld}
    // id={die.id}
    holdDice = {() => holdDice(die.id)}
     />
  })


  // console.log(allNewDice())
  console.log(dice)

  // const handleClick = () => {
  //   setDice(allNewDice())
  // }
    
  return (
    <main>
      {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {diceElements}
        </div>
        <button 
        className="roll-dice" 
        onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
        </button>
    </main>
)
}

export default App;
