import React from "react";
import Spinner from "../UI/Spinner";
import CharacterItem from './CharacterItem'
 
const CharacterGrid = (props) => {
    // Here we will check the isLoading property because if it's still true we will display the Spinner component which displays a gif
    return props.isLoading ? (
        <Spinner />
    ) 
    : (
    <section className="cards">
        {/* Mapping through all the items in the api and rendering each of them in the CharacterItem component */}
        {props.items.map((item) => (
            <CharacterItem key={item.char_id} item = {item}></CharacterItem>
            // passing in the entire object item as a prop so that we can use it in the CharacterItem component
        ))}

    </section>
    
    )
}

export default CharacterGrid