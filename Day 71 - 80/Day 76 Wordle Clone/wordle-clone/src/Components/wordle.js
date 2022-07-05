import React,{useEffect} from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';

const Wordle = (props) => {
    const {solution} = props
    const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution);

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        if(isCorrect) {
          window.removeEventListener('keyup', handleKeyup)
          setTimeout(() => {
            alert('Great Job!!! Restart the window to play again')
          }, 2000) 
        }
        if(turn > 5) {
          window.removeEventListener('keyup', handleKeyup)
          alert('Better luck next time!!!')
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

  return (
    <main>
        <h3>Solution - {solution}</h3>
        <h2>Turns - {turn}</h2>
        <h4 className='currentGuess'>CurrentGuess - {currentGuess}</h4>
        <Grid guesses={guesses} turn={turn} currentGuess={currentGuess}/>
    </main>
  )
}

export default Wordle
