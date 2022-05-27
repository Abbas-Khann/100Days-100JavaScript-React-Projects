import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Start = () => {
    return(
        <div className={styles.start}>
            <h1>Quizzical</h1>
            <p>Let's see how good you are at Quizzes</p>
            <Link href='/Quiz'>
            <button>Start Quiz</button>
            </Link>
        </div>
    )
}

export default Start