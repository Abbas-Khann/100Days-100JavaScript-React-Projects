import React from "react";

function Header({setSearch, search}) {
    function changeHandler(e) {
        setSearch(e.target.value)
    }

    return(
        <div className="header-div">
            <h1 className="heading">😺 Emoji Application 😺</h1>

            <input className="input-box" 
            placeholder="Enter an emoji here"
            
            value={search}
            onChange={changeHandler}
            />
        </div>
    )
} 


export default Header