import React from "react";
import spinnerImg from '../../images/spinner.gif'
const Spinner = () => {

    const spinnerStyles = {
        width : '200px',
        margin : 'auto',
        display : 'block'
    }

    return (
        <img src={spinnerImg} style={spinnerStyles} alt=""/>
    )
}

export default Spinner