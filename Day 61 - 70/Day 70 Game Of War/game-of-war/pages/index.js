import React, {useState, useRef} from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

const Home = () => {

  const [remainingCards, setRemainingCards] = useState(0)
  const [deckId, setDeckId] = useState('')
  const [firstImage, setFirstImage] =  useState('')
  const [secondImage, setSecondImage] =  useState('')
  const [myScore, setMyScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [winnerText, setWinnerText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const drawRef = useRef(null)

    const getDeckId = () => {
      fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setDeckId(data.deck_id)
        console.log(deckId)
        setMyScore(myScore = 0)
        setComputerScore(computerScore = 0)
      })
    }


    const getDeckImages = () => {
          fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            console.log(data.cards[0].image)
            setFirstImage(data.cards[0].image)
            setSecondImage(data.cards[1].image)

            setRemainingCards(data.remaining)
            compareCards(data.cards[0], data.cards[1])
            if(data.remaining === 0) {
              drawRef.current.disabled =  true
              if(computerScore > myScore) {
                setWinnerText('Computer Won the Jackpot!')
              }
              else if(computerScore < myScore) {
                setWinnerText('You Won the Jackpot!')
              }
              else {
                setWinnerText('We have a Draw')
              }
            }

          })
      }
      

      const compareCards = (card1, card2) => {
          const valueOptions = ['2', '3' , '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];
          const card1ValueIndex = valueOptions.indexOf(card1.value)
          const card2ValueIndex = valueOptions.indexOf(card2.value)
          if(card1ValueIndex > card2ValueIndex) {
            setWinnerText("Computer Won!")
            setComputerScore(computerScore + 1)
          }
          else if(card2ValueIndex > card1ValueIndex) {
            setWinnerText('You Won!')
            setMyScore(myScore + 1)
          }
          else {
            setWinnerText('War!')
          }

      }


      const handleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
      }


  return (
    <main className={`${darkMode && 'dark'}`}>
      <div className='dark:bg-slate-800 h-screen'>

        <div className='flex justify-around pt-3'>
          <button className='text-xl bg-red-100 rounded px-5 py-2 my-3 cursor-pointer bg-0 outline-none border-none hover:bg-sky-300 '
          onClick={getDeckId}
          >New Deck</button>
          {darkMode ?
            <MdDarkMode 
            className='text-5xl cursor-pointer text-white'
            onClick={handleDarkMode}
            />
            :
            <MdOutlineLightMode className=' text-5xl cursor-pointer'
            onClick={handleDarkMode}
            />
            
          }

        </div>
          <div className='flex flex-col items-center dark:text-white'>
            <h1 className='text-4xl py-0'>Game of War</h1>
          <p>Remaining Cards: {remainingCards}</p>
          
            <h3 className='m-0 my-2'>Computer Score: {computerScore}</h3>
            <div className='flex-col items-center sm:flex my-5 items-center'>
              <img src={firstImage}  className='mx-1 sm:w-36 w-52 my-1'/>
              <img src={secondImage} className='mx-1 sm:w-36 w-52 my-1' />
            </div>
            <h3 className='m-0 mb-3'>My Score: {myScore}</h3>
            <button className='outline-none border-none px-10 py-1 text-lg cursor-pointer bg-red-100 rounded hover:bg-sky-300'
            onClick={getDeckImages}
            ref={drawRef}
            >Draw</button>
            <h3 className=''>{winnerText}</h3>
          </div>
      </div>
    </main>
  )
}

export default Home


/* features needed to add 
1) Dark Mode
2) Api Spam

*/
