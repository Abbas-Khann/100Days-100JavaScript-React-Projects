import React from "react";

const SingleCard = (props) => {
    const { card, handleChoice, flipped, disabled } = props

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

    return (
              <div className = "card">
                  <div className={flipped ? "flipped" : ""}>
                <img 
                className='front' 
                src={card.src} 
                alt="card-front"
                
                />
                <img 
                className='back' 
                src='/img/cover.png' 
                alt='card-back' 
                onClick={handleClick}
                />
                </div>
                
              </div>
          
    )
}

export default SingleCard