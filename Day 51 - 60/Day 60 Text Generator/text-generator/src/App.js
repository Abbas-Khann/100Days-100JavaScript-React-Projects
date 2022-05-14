import React from 'react'
import './App.css';
// import axios from 'axios'
import Header from './ui/Header';
import Options from './Components/Options'
import Output from './Components/Output';

const App = () => {


  const [paragraphs, setParagraphs] = React.useState([]) // This state is going to get all the text we are going to get from the data
  const [tag, setTag] = React.useState('p') // The tag on default will be set to the p tag
  const [inputVal, setInputVal] = React.useState(1) // This state will be for the number input inside the paragraphs
  const [includeHtml, setIncludeHtml] = React.useState('Yes') // IncludeHtml will give us an option on whether we want to include html to the paragraphs or not


  React.useEffect(() => { 
    // const url = `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`;
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputVal}&start-with-lorem=1`
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setParagraphs(data) // Here we are setting the paragraphs to the data that we fetched from the api which is the dummy text
    }

    fetchData() // function call

  }, [inputVal]) // The dependency array is going to be dependent on inputValue which means if the user inputs 2 then the api will run twice and bring in 2 paragraphs

  return (
    <div className='App'>
      <Header />
      <Options                          // passing the necessary props to the Options Component
      paragraphs = {paragraphs}
      tag = {tag}
      setTag = {setTag}
      inputVal = {inputVal}
      setInputVal = {setInputVal}
      includeHtml = {includeHtml}
      setIncludeHtml = {setIncludeHtml}
      
      />

      <Output 
      paragraphs = {paragraphs}
      tag = {tag}
      includeHtml = {includeHtml}
      
      />
    </div>
  )
}

export default App;
