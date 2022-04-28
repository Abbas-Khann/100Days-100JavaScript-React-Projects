import './App.css';
import Grid from './Grid';
import Navbar from './Navbar'
import Card from './Card';
import data from './data';


function App() {

  const getData = data.map(item => <Card 
    key = {item.id}

    img = {item.coverImg}
    rating = {item.stats.rating}
    reviewCount = {item.stats.reviewCount}
    country = {item.location}
    title = {item.title}
    price = {item.price}
  
  
  />)

    return(
      <div className='container'>
      <Navbar />
      <Grid />

      <div className='card-div'>
      {getData}
      
      </div>
      
      </div>
    )
    
}

export default App;
