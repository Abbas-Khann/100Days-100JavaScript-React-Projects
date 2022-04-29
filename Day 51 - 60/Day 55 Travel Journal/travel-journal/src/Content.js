import React from "react";

function content(props) {
    return(
        <section className="main-content">
        <div className="image">
            <img src={props.item.imageUrl} className="travel-img" alt="pictur"/>
            </div>
            <div className="info">
                <span className="location-icon"> <img src="/path.png" className="red-icon" alt="" /> </span>
                <span className="location-name">{props.item.location} </span>
                <a href="#" className="location-link">{props.item.googleMapsUrl}</a>
                <h2 className="travel-place">{props.item.title}</h2>
                <p className="from-to-date">{props.item.startDate}, {props.item.endDate}</p>
                <p className="travel-place-description">{props.item.description}</p>
            </div>
        </section>
            
    )
}

export default content