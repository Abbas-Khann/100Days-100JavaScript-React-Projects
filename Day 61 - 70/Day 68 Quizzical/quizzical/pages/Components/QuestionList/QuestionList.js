import React, {useState, useEffect} from "react";
import styles from './QuestionList.module.css'
import Question from '../Question/Question'
import getQuestions from "../../getQuestions";


const QuestionList = (props) => {
    const { gameOptions, handleGameStart, handleNoQuestionsError } = props

    const [questionsArray, setQuestionsArray] = useState([])
    const [checkAnswerBtn, setCheckAnswerBtn] = useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)


    const allQuestionsAnswered = questionsArray.every(question => question.selectedAnswer !== "")

    useEffect(() => {
        getQuestions(gameOptions).then(questions => {
            if(questions.length === 0) {
                handleGameStart()
                handleNoQuestionsError(true)
                return;
            }
            else {
                handleNoQuestionsError(false)
            }

            return setQuestionsArray(questions.map((question => {
                return {
                    ...question,
                    selectedAnswer : "",
                    showAnswer : false
                }
            })))

        })
    }, [])

    useEffect(() => {
          if(questionsArray.length !== 0 && allQuestionsAnswered) {
              let correctAnswers = 0;

              questionsArray.forEach(question => {
                  if(question.correct_answer === question.selectedAnswer) {
                      correctAnswers++
                  }
              });
              setCorrectAnswerCount(correctAnswers)
              setCheckAnswerBtn(true)
          }
    }, [questionsArray])

    const handleSelectAnswer = (questionId, answer) => {
        if(!isGameOver) {
            setQuestionsArray(prevState => (
                prevState.map((ques) => {
                    return ques.id === questionId 
                    ? { ...ques, selectedAnswer: answer } 
                    : ques
                })
            ))
        }
    }

    const checkAnswers = () => {
        if(allQuestionsAnswered) {
            setIsGameOver(true)

            setQuestionsArray(prevState => {
                return prevState.map(question => ({ ...question, showAnswer: true }))
            })
        }
    }

    const resetGame = () => {
        setCheckAnswerBtn(false)
        setIsGameOver(false)
        handleGameStart()
    }

    const questionElements = questionsArray.map(question => {
        return <Question 
                        key={question.id}
                        id={question.id}
                        question={question.question}
                        correctAnswer={question.correct_answer}
                        incorrectAnswers={question.incorrect_answers}
                        difficulty={question.difficulty}
                        category={question.category}
                        selectedAnswer={question.selectedAnswer}
                        showAnswer={question.showAnswer}
                        handleSelectAnswer={handleSelectAnswer}
        />
    })


    return(
                <section className={styles.questionListContainer}>
                    {questionElements}

                       <div className={styles.bottomContainer}>
                           {isGameOver &&
                                    <h3 className={styles.correctAnswersText}>
                                        You scored {correctAnswerCount} / 5 
                                    </h3>
                           }

                           <button className={styles.btnPrimary}

                           onClick={isGameOver ? resetGame : checkAnswers}
                           >
                            {isGameOver ? "Play Again" : "Check Answers"}

                           </button>
                           
                        </div>

                </section>
    )

}

export default QuestionList