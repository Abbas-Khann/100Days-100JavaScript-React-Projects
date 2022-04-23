import React, { useEffect, useState } from 'react';
import './App.css'
import ContactCard from './ContactCard';
// Here we just declared a component

// A component in react is just a function that returns some data
function App() {
    const [results, setResults] = useState([])

    useEffect(()=> {
        fetch("https://randomuser.me/api/?results=20")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setResults(data.results)
        })
    }, [])


    return (
        <div>

        {results.map((result, index) => {
            return(
            <ContactCard key = {index}
            avatarUrl = {result.picture.large}
            name = {result.name.first}
            email = {result.email}
            age = {result.dob.age}
            />
            
            )
        })}

            </div>
    );
}

export default App;

