import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import blueCandy from '../public/images/blue-candy.png'
import greenCandy from '../public/images/green-candy.png'
import orangeCandy from '../public/images/orange-candy.png'
import purpleCandy from '../public/images/purple-candy.png'
import redCandy from '../public/images/red-candy.png'
import yellowCandy from '../public/images/yellow-candy.png'
import blank from '../public/images/blank.png'

const width = 8;
const candyColors = [
  blueCandy, 
  greenCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy
];
const Home = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])
  const [squareBeingDragged, setSquareBeingDragged] = useState(null)
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)


  const checkForColumnOfThree = () => {
    // we need to loop until index 47 for columns of three since there is no combination of threes after that 
    for(let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2]; 
      // for checking indices we have the index of 0 (i), i + width = 8 which is the second row and i + width * 2 = 16 is the third row
      // now we're going to choose the decided color that we wanna check
      const decidedColor = currentColorArrangement[i];
      if(columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
          // we have a match
        columnOfThree.forEach((square) => currentColorArrangement[square] = blank);
        return true
      }
    }
  }

  const checkForRowOfThree = () => {
    for(let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
        if(notValid.includes(i)) continue
      if(rowOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
        // we have a match
        rowOfThree.forEach((square) => currentColorArrangement[square] = blank);
        return true
      }
    }
  }

  const checkForColumnOfFour = () => {
    for(let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];
      if(columnOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
        // we find a match 
        columnOfFour.forEach((square) => currentColorArrangement[square] = blank);
        return true
      }
    }
  }

  const checkForRowOfFour = () => {
    for(let i = 0; i <= 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentColorArrangement[i];
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];
        if(notValid.includes(i)) continue
      if(rowOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
        // we have a match
        rowOfFour.forEach((square) => currentColorArrangement[square] = blank);
        return true
      }
    }
  }

  const moveIntoSquareBelow = () => {
    for(let i = 0; i <= 55; i++) {
      const firstRow = [0,1,2,3,4,5,6,7];
      const isFirstRow = firstRow.includes(i);
      if(isFirstRow && currentColorArrangement[i] === blank){
        const randomNum = Math.floor(Math.random() * candyColors.length)
        currentColorArrangement[i] = candyColors[randomNum];
      }

      if((currentColorArrangement[i + width]) === blank ) {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = blank
      }
    }
  }

      const dragStart = (e) => {
          console.log(e.target)
          setSquareBeingDragged(e.target)
        }
        const dragDrop = (e) => {
          console.log(e.target)
            setSquareBeingReplaced(e.target)
        }
        const dragEnd = () => {
              const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
              const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))
          
              console.log(squareBeingDraggedId, squareBeingReplacedId, "asdfas" )
              currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
              currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')
          
              const validMoves = [
                    squareBeingDraggedId - 1,
                    squareBeingDraggedId - width,
                    squareBeingDraggedId + 1,
                    squareBeingDraggedId + width
                ]
            
                const validMove = validMoves.includes(squareBeingReplacedId)
                console.log(validMove,"vM")

            
                const isAColumnOfFour = checkForColumnOfFour();
                const isARowOfFour = checkForRowOfFour();
                const isAColumnOfThree = checkForColumnOfThree();
                const isARowOfThree = checkForRowOfThree();
            
                if (validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)){
                      setSquareBeingDragged(null)
                      setSquareBeingReplaced(null)
                      console.log("squareDragged",squareBeingDragged)
                      console.log("squareReplaced", squareBeingReplaced)
                      console.log("if executed")
                      // alert("worked")
                  } else {
                        currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
                        currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
                        setCurrentColorArrangement([...currentColorArrangement])
                        console.log("else executed")
                    }
              }
                


  const createBoard = () => {
    const randomColorArrangement = [];
    // to create an array of 64 randomly selected colors we're gonna create a for loop
    for(let i = 0; i < width * width; i++) {
      // now everytime we iterate we want to generate a random number in the array
      const rand = Math.floor(Math.random() * candyColors.length);
      const randomColor = candyColors[rand];
      randomColorArrangement.push(randomColor);
    }
    console.log(randomColorArrangement) // we will have an array of 64 random colors
    setCurrentColorArrangement(randomColorArrangement);
  }

  // console.log(currentColorArrangement)
  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {

    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)
    return () => clearInterval(timer)

  }, [checkForColumnOfFour,checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])



  return (
    <div 
  
    >
      <Head>
        <title>Candy Crush Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
          <h1
          className={styles.h1}
          >Candy Crush</h1>
        <main className={styles.app}>
          <div className={styles.game}>
              {currentColorArrangement.map((candyColor, index) => {
                return <Image 
                key={index}
                alt={candyColor}
                src={candyColor}
                width="60"
                height="30"
                data-id={index}
                draggable={true}
                onDragStart={dragStart}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={dragDrop}
                onDragEnd={dragEnd}
                />
              })}
          </div>
        </main>

    </body>
    </div>
  )
}

export default Home
