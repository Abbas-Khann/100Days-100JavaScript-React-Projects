import React, {useEffect, useState} from "react"
import styles from '../styles/Quiz.module.css'
import Questions from "../Components/Questions"
import Link from 'next/link'
import Correct from "./Correct"

const Quiz = () => {

    const [quizzes, setQuizzes] = useState([
        { question: "Who is the best gamer of all time",
          correct_answer: "Abbas Khan",
          incorrect_answers: ["Shroud", "Scump", "Faker"],
    }
    ]);

    const [score, setScore] = useState(0)

    // console.log("Quizzes state" ,quizzes)
    
    useEffect(() => {
        const getData = async() => {
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple");
            const data = await response.json()
            // console.log(data.results)
            setQuizzes(data.results)
        }
        getData()
    }, [])
    
    const getRandomQuestion = () => {
        const incorrectAnswers = quizzes.map((ques) => {
            return ques.incorrect_answers.map((incorrect) => incorrect)
        });
        // console.log("Incorrect answers",incorrectAnswers)
        
        const correctAnswers = quizzes.map((ques) => {
            return ques.correct_answer
        });
        // console.log("Correct answers" , correctAnswers) 
        
        correctAnswers.map((value, index) => {
            return incorrectAnswers[index].push(value)
        })
        return incorrectAnswers
    }
    
    const answersList = getRandomQuestion();
    
    const randomizeQuestions = () => {
        return answersList.map((value) => {
            return value.sort(() => Math.floor(Math.random() * 10 > 5) ? 1 : -1)
        })
        
    }
    
    const allAnswersList = randomizeQuestions()
    
    const checkCorrectAnswer = (event) => {
        const correctAnswers = quizzes.map((question) => {
            return question.correct_answer
        })

        const check1 = correctAnswers.some((value) => {
            return value === event.target.textContent;
        })

        if(check1) {
            setScore(score + 1)
        }
        else {
            score
        }

        console.log("CA", correctAnswers)
        console.log("C1", check1)
        console.log(score)

    }
    // const compareAll = allAnswersList.map((answer) => {
    //     return answer
    // })

    // for(let i = 0; i < 5; i++) {
    //     for(let j = 0; j < compareAll.length; j++) {
    //         if(checkCorrect[i] === compareAll[j][j]) {
    //             setScore(score + 1)
    //         }
    //         else {
    //             score
    //             console.log(checkCorrect[i])
    //             console.log("else statement executed first")
    //         }
    //     }
    // }

    // console.log(compareAll, "CompareALL")
    // console.log(score)
    // console.log("CheckCorrect",checkCorrect)
    
    // console.table("CompareALL", compareAll)
    
    // const compareAll = allAnswersList.map((answer, index) => {
    //     return answer
    // })
    
    // for(let i = 0; i < checkCorrect.length; i++) {
    //     for(let j = 0; j < compareAll[i].length; j++) {
    //         if(checkCorrect[i] === compareAll[j][j]) {
    //             setScore(score => score + 1)
    //             console.log("Score should increment mannn!")
    //         }
    //         else {
    //             score
    //         }
    //     }
    // }
    // const newArray = []
    // newArray.push(checkCorrect)
    // newArray.push(compareAll)
    // console.log("New Array",newArray)
    // console.log("Score", score)
    // newArray.map((element, index) => {
    //     console.log("element", element)
    //     console.log("element[index]",element[index])
    //     return checkCorrect === element[index] ? setScore(score + 1) : score
        // map or loop and compare the indices maybe
        // if checkCorrect at any index is similar to newArray then it's correct and score + 1
        // but we will need to loop or map for that


        // console.log("CompareAll",compareAll)
        // return compareAll
        // checkCorrect.some((value) => {
        //     return value === event.target.textContent;
        // })

        // console.log(checkCorrect)
        // if(checkOne === true) {
        //     event.target.classList.add("green")
        //     // event.target.classList.remove("red")
        // }
        
        // else {
        //     event.target.classList.add("red")
        //     // event.target.classList.remove("green")
        // }

    // console.log("checkCorrectFunction", checkCorrectAnswer())

    const option = allAnswersList.map((quiz) => {
    return (
        <div> 
        <div className={styles.options}>
            <option
             dangerouslySetInnerHTML={{__html: quiz[0]}} 
            onClick={checkCorrectAnswer}>
                
            </option>
            <option 
        
            dangerouslySetInnerHTML={{__html: quiz[1]}} 
            onClick={checkCorrectAnswer}>

            </option>
            <option 
        
            dangerouslySetInnerHTML={{__html: quiz[2]}} 
            onClick={checkCorrectAnswer}>

            </option>
            <option 
        
            dangerouslySetInnerHTML={{__html: quiz[3]}} 
            onClick={checkCorrectAnswer}>

            </option>
        </div>
        <hr />
    </div> 
        
        )
    });



    return (
        <div>
        <Questions 
        quizzes = {quizzes}
        answerList = {option}
        handleClick = {(e) => checkCorrectAnswer(e.target)}
        />

        <Correct 
        count = {score}
        />

        <div className={styles.btnDiv}>
        <Link href="/Correct">
        <button className={styles.btn}>Check Answers</button>
        </Link>
        
        </div>
        </div>

    )


}

export default Quiz