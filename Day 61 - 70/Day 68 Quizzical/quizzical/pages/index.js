import React, {useState} from 'react'
import styles from '../styles/Home.module.css' // put all the app css stuff in home modules.css
import QuestionList from './Components/QuestionList/QuestionList'

const Home = () => {

  const [gameStarted, setGameStarted] = useState(false) // to check the state of the game whether if it's started or not
  const [showNoQuestionsError, setShowNoQuestionsError] = useState(false)
  const [gameOptions, setGameOptions] = useState(
        { 
            category: "",
            difficulty: "",
            type: ""
    
        }
  );
  
  const handleGameStart = () => {
    setGameStarted(prevState => !prevState)
  }

 const handleNoQuestionsError = (boolean) => {
        setShowNoQuestionsError(boolean)
 }

 const handleChange = (event) => {
    const { name, value } = event.target;
    setGameOptions(prevGameOptions => {
      return {
        ...prevGameOptions,
        [name]: value
      }
    })
 }


  return (
    <main> 
        <img className={styles.shapeTop} src="/shape-1.png" />

          {
            gameStarted 
            
            ?
            
            <section className={styles.gameContainer}>
              <QuestionList 
                  gameOptions = {gameOptions}
                  handleGameStart = {handleGameStart}
                  handleNoQuestionsError = {handleNoQuestionsError}
              />
            </section>
            :
            <section className={styles.gameIntro}>
                  <h1 className={styles.gameTitle}>Quizzical</h1>
                  <p className={styles.gameText}>Answer the questions and test your knowledge!</p>
                  
                  {showNoQuestionsError &&
                        <h2 className={styles.noQuestionsText}>
                          Oops! We couldn't find any questions with these options!
                        </h2>
                  }
                  <div className={styles.gameOptionsContainer}>
                      <div className={styles.selectContainer}>
                            <label className={styles.customLabel} htmlFor="category">
                              Category:
                            </label>
                      <select
                      name='category'
                      id='category'
                      className={styles.customSelect}
                      value={gameOptions.category}
                      onChange={handleChange}
                      >
                      <option value="">Any Category</option>
                      <option value="9">General Knowledge</option>
                      <option value="10">Entertainment: Books</option>
                      <option value="11">Entertainment: Film</option>
                      <option value="12">Entertainment: Music</option>
                      <option value="13">Entertainment: Musicals &amp; Theatres</option>
                      <option value="14">Entertainment: Television</option>
                      <option value="15">Entertainment: Video Games</option>
                      <option value="16">Entertainment: Board Games</option>
                      <option value="17">Science &amp; Nature</option>
                      <option value="18">Science: Computers</option>
                      <option value="19">Science: Mathematics</option>
                      <option value="20">Mythology</option>
                      <option value="21">Sports</option>
                      <option value="22">Geography</option>
                      <option value="23">History</option>
                      <option value="24">Politics</option>
                      <option value="25">Art</option>
                      <option value="26">Celebrities</option>
                      <option value="27">Animals</option>
                      <option value="28">Vehicles</option>
                      <option value="29">Entertainment: Comics</option>
                      <option value="30">Science: Gadgets</option>
                      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                      <option value="32">Entertainment: Cartoon &amp; Animations</option>
                      </select>


                      </div>
                      <div className={styles.selectContainer}>
                            <lable className={styles.customLabel} htmlFor="difficulty">
                              Difficulty: 
                            </lable>
                            <select 
                               name="difficulty"
                               id="difficulty"
                               className={styles.customSelect}
                               value={gameOptions.difficulty}
                               onChange={handleChange}
                              >
                                  <option value="">Any Difficulty</option>
                                  <option value="easy">Easy</option>
                                  <option value="medium">Medium</option>
                                  <option value="hard">Hard</option>

                            </select>
                      </div>  
                      <div className={styles.selectContainer}>
                            <label className={styles.customLabel} htmlFor="type">
                              Type of Questions
                            </label>

                            <select
                            name='type'
                            id='type'
                            className={styles.customSelect}
                            value={gameOptions.type}
                            onChange={handleChange}
                            >
                                    <option value="">Any Type</option>
                                    <option value="multiple">Multiple Choice </option>
                                    <option value="boolean">True / False</option>

                            </select>

                      </div>


                  </div>  
                    <button className={styles.btnPrimary}
                    onClick={handleGameStart}
                    >Start Quiz</button>

            </section>

          }
        <img className={styles.shapeBottom} src="/shape-2.png" alt="shape-bottom" />
          <footer>
            Developed by&nbsp;
              <a href="#">
                Abbas Khan 
              </a>
          </footer>
        
    </main>
  );
}

export default Home