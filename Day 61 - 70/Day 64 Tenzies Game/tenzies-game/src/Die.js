import React from "react";

const Die = (props) => {
    const { value, isHeld, holdDice } = props

    const dieStyles = {
        backgroundColor :  isHeld ? "#59E391" : "#fff" 
    }


    return(
        <div className="die-face" style={dieStyles} onClick={holdDice}>
            <h2>{value}</h2>

        </div>
    )
}

export default Die