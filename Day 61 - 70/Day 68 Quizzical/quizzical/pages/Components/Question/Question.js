import React from "react";
import { decode } from 'html-entities'
import styles from './Question.module.css'

const Question = (props) => {

        let incorrectAnswersElements = props.incorrectAnswers.map(answer => {
            const incorrectAnswerClassName = `
            ${props.selectedAnswer === answer ? "questionBtnSelected" : "questionBtn"}
            ${(props.showAnswer && props.selectedAnswer === answer) && "questionBtnIncorrect"}
            `;
            return <button 
                    className={styles.incorrectAnswerClassName}
                    onClick={() => props.handleSelectAnswer(props.id, answer)}
            >
                {decode(answer)}

            </button>
     
        });

        const correctAnswerClassName = `
        ${props.selectedAnswer === props.correctAnswer ? "questionBtnSelected" : "questionBtn" }
        ${props.showAnswer && "questionBtnCorrect"}
        `;

        const correctAnswerElement = 
                            <button
                                    className={styles.correctAnswerClassName}
                                    onClick={() => props.handleSelectAnswer(props.id, props.correctAnswer)}
                            > 
                            { decode(props.correctAnswer) }
                            </button>

        incorrectAnswersElements.push(correctAnswerElement);

        const sortedAnswerElements = incorrectAnswersElements.sort((a, b) => {
            return a.props.children.localeCompare(b.props.children)
        })


    return(
        <article className={styles.questionContainer}>
            <div>
                <h3 className={styles.questionText}>
                    { decode(props.question) }
                </h3>
                { sortedAnswerElements }
            </div>
                {
                    props.showAnswer && 
                        (props.selectedAnswer === props.correctAnswer
                         ? <img src="/tick.svg" width={35} alt="" />   
                         : <img src="/cross.svg" width={35} alt="" />)
                }

        </article>

    )
}

export default Question