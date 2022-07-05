import { useState } from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = () => {
        let solutionsArray = [...solution];
        let formattedGuess = [...currentGuess].map((alphabet) => {
            return {
                key: alphabet,
                color: 'grey'
            }
        })
        // console.log(formattedGuess)
        // Check for green color
        formattedGuess.forEach((alphabet, index) => {
            if(solutionsArray[index] === alphabet.key) {
                formattedGuess[index].color = 'green';
                solutionsArray[index] = null;
            }
        })
        // Check for yellow color
        formattedGuess.forEach((alphabet, index) => {
            if(solutionsArray.includes(alphabet.key) && alphabet.color !== 'green') {
                formattedGuess[index].color = 'yellow';
                solutionsArray[solutionsArray.indexOf(alphabet.key)] = null;
            }
        })
        return formattedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })
        setCurrentGuess('');
    }

    console.log("CurrentGuess rn", currentGuess)

    const handleKeyup = ({ key }) => {
        if(key === 'Enter') {
            if(currentGuess.length !== 5) {
                alert('Your guess is less than 5 alphabets');
                return 
            }
            if(history.includes(currentGuess)) {
                alert('You have already made this guess before');
                return
            }
            if(turn > 5) {
                alert('You have already had 5 turns');
                return
            }
            const formatted = formatGuess();
            // console.log(formatted)
            addNewGuess(formatted)
        }

        if(key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return 
        }
        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle