// import React from "react";
import React, {useState} from "react";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false)


    return(
        <div className='contact-card'>
            <img src= {props.avatarUrl} alt='profile'></img>
            <div className='user-details'>
                <p className='name'>{props.name}</p>
                <p className='email'>{props.email}</p>
                <button className="btn" onClick={()=> setShowAge(!showAge)}>Show Age</button>
                {showAge ? <p>{props.age}</p> : null}
            </div>
        </div>
    )
}

export default ContactCard;