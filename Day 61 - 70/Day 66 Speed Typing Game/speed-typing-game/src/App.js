import React from 'react';
import './App.css';
import useWordGame from './Hooks/useWordGame'


const App = () => {

  const { 
     handleChange,
     text,
     isTimeRunning,
     textBoxRef,
     timeRemaining,
     startGame,
     wordCount
   } = useWordGame()
   
  
  return (
    <main className="App">
        <h1>How fast can you type?</h1>
        <textarea 
        onChange={handleChange}
        value={text}
        disabled={isTimeRunning === false}
        ref={textBoxRef}
        />
        <h4>Time Remaining: {timeRemaining}</h4>
        <button 
        onClick={startGame}
        disabled={isTimeRunning}
        >Start Game: </button>
        <h1>Word Count: {wordCount}</h1>
    </main>
  )
}

export default App;