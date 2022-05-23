import {useState, useEffect, useRef} from 'react'


const useWordGame = () => {

  const [timeRemaining, setTimeRemaining] = useState(20)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [text, setText] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  const checkWords = (text) => {
    const wordsArr = text.trim().split(" ")
    const filteredText = wordsArr.filter(word => {
      return word !== ""
    })
    const filteredTextLength = filteredText.length
    // console.log(filteredTextLength)
    return filteredTextLength
  }

  // console.log(text)
  
  const handleChange = (event) => {
    const {value} = event.target
    setText(value)
  }
  
  function startGame()  {
    setIsTimeRunning(true)
    setTimeRemaining(20)
    setText("")
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(timer => timer - 1)
      }, 1000)
    }
    else if(timeRemaining === 0) {
      setIsTimeRunning(false)
      const wordCounter = checkWords(text)
      setWordCount(wordCounter)
      console.log(wordCounter)
    } 
    
  }, [timeRemaining, isTimeRunning])
  
  return { handleChange, text, isTimeRunning, textBoxRef, timeRemaining, startGame, wordCount }

}

export default useWordGame