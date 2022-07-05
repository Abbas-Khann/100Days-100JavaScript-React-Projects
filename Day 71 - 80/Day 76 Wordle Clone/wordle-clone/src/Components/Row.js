import React from 'react'

const Row = (props) => {
    const {guess, currentGuess} = props
    
    if(currentGuess) {
        let letters = currentGuess.split('');

        return(
            <div className='row current'>
                {letters.map((letter, idx) => {
                    return <div key={idx} className="filled">{letter}</div>
                })}
                {[...Array(5 - letters.length)].map((v, idx) => {
                    return <div key={idx}></div>
                })}
            </div>
        )
    }
    

    if(guess) {
        return (
            <div className='row past'>
                {guess.map((letter, idx) => {
                    return <div key={idx} className={letter.color}>{letter.key}</div>
                })}
            </div>
        )
    }



  return (
    <main className='row'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </main>
  )
}

export default Row