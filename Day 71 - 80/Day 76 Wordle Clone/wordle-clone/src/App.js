import React,{useState, useEffect} from 'react'
import Wordle from './Components/wordle';

const App = () => {
  const [solution, setSolution] = useState(null);


  useEffect(() => {
      fetch('http://localhost:3001/solutions')
      .then(response => response.json())
      .then(data => {
        const rand = Math.floor(Math.random() * data.length);
        const randomWord = data[rand];
        setSolution(randomWord.word);
      })
  }, [])


  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
