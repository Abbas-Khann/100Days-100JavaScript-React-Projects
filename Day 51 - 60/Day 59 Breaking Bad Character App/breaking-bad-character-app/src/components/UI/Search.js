import React from "react";


// Here we are destructuring the setQuery prop that we passed earlier on in the App file to the Search component
const Search = ({getQuery}) => {
    // Setting up another state for updating the search value
    const [text, setText] = React.useState("")


    // The onChange function will be executed after the onChange event is triggered in the input 
    const onChange = (query) => { // We are passing a parameter here so that we can recieve search value
        setText(query) // Setting up the state to the query to update the value of the state itself 
        getQuery(query) // We will make a function call with the argument of our updated query that will further execute the function in the App file 
    }


    return(

        <section className="search">
            <form>
                <input 
                type="text"
                className="form-control"
                placeholder="Enter a Character here"
                value={text} // passing the text as the value here to update the state
                onChange={(event) => onChange(event.target.value)} // event.target.value will fetch the value of the inputted text
                autoFocus
                />

            </form>
        </section>

    )
}

export default Search