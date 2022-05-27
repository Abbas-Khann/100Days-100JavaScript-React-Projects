import React from "react";
import Quiz from "../pages/Quiz";
import styles from '../styles/Quiz.module.css'

const Questions = (props) => {

    const { quizzes, answerList } = props
    // console.log("questions", quizzes )
    
    const questionList = quizzes.map((ques, index) => {
        return (
            <div className={styles.question}>
                <h4 dangerouslySetInnerHTML={{__html: ques.question}}></h4>
                {answerList[index]}
                </div>
        );
    })
    return (
        <div>
            {questionList}
        </div>
    )
}


export default Questions
