import styles from '../styles/Home.module.css'
import { Toolbar } from '../Components/Toolbar'

export default function Home() {
  return (
    <div className='page-container'>
          <Toolbar />
        <div className={styles.main}>

          <h1>Next.js news App</h1>
          <h3>You're one stop shop from the latest news articles</h3>
        </div>
    </div>
  )
}
