import React from "react";

const Header = (props) => {
    const { setSearchInput } = props

    const getInput = (e) => {
        setSearchInput(e.target.value)
        console.log("inputted")
    }
    return (
        <nav className="header">
            <div className="head">
            <i className="fa-solid fa-film"></i>
            <h1 className='heading'>Movies Application</h1>
            </div>
            <input
            name="text"
            onChange={getInput}
            className="input-box"
            placeholder="&#xf002; Search a movie here"
            />

        </nav>
    )
}

export default Header