import React from "react";


function Card(props) {

    return (
            <div className="card-container">
                <div className="card-stats">
                <img src={ `images/${props.img}`} alt="imag" className="card-image"  />
                <div >
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
                </div>
                </div>

                <p>{props.title}</p>
                <p><span>From: ${props.price}/ Person</span></p>

            </div>
    )



}

export default Card