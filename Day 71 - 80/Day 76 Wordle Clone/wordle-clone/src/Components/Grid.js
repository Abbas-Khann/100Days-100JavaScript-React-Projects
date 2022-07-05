import React from 'react'
import Row from './Row'

const Grid = (props) => {
    const {currentGuess, turn, guesses} = props
    const game = guesses.map((guess, idx) => {
        if(turn === idx) {
            return <Row key={idx} currentGuess={currentGuess} />
        }
        return <Row key={idx}  guess={guess} />
    })
  return (
    <div>
        {game}
    </div>
  )
}

export default Grid
