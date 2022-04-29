import './App.css';
import Navbar from './Navbar'
import Content from './Content';
import data from './data'
// console.log(data) 

function App() {

  const cardData = data.map((item) => {
    return (
      <Content 
      item = {item}
      />
    )
  })
    return(
      <>
      
      <Navbar />

      {/* <Content />
      <Content />
      <Content /> */}
      {cardData}

      </>
    )
    
}

export default App;
