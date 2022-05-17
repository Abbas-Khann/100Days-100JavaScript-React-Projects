import React from 'react';
import './App.css'
import Header from './Components/Header';
import MovieList from './Components/MovieList';


const trendingMovies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fdc5fa2d0ee49806a3aa96d23971c45";

const App = () => {

  const [searchInput, setSearchInput] = React.useState('')
  const [filmList, setFilmList] = React.useState([])


  const getInitialState = async () => {
    const response = await fetch(trendingMovies)
    const data = await response.json()
    setFilmList(data.results)
    
  }

 React.useEffect(() => {

    getInitialState()
 }, [])


  React.useEffect(() => {
    const apiURL = `https://api.themoviedb.org/3/search/movie?&api_key=5fdc5fa2d0ee49806a3aa96d23971c45&query=${searchInput}`

    const getMoviesData = async () => {
      const response = await fetch(apiURL)
      const data = await response.json()
      console.log(data)
        setFilmList(data.results)
      }
      
      getMoviesData() 
      
    }, [searchInput])
  

  console.log("MovieList State: " , filmList)


  return (
    <div className='App'>

      <Header 
      setSearchInput = {setSearchInput}
      />

      <MovieList 
      filmList = {filmList}
      
      />

    </div>
  )
}

export default App

