import React from "react";

const Header = (props) => {
    

    return(
        <div className="header">
            <h1>Image Application</h1>
            <input 
            placeholder="Search for an image"
            value={(props.inputValue)}
            onChange={(event) => props.setInputValue(event.target.value) }
            />
            <button 
            onClick={(event) => props.setInputValue(event.target.value)}
            >Search</button>
        </div>
    )
}

export default Header