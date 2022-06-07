import React, {useState, useEffect} from 'react'

const Home = () => {
  
  const [homePageImage, setHomePageImage] = useState('')
  const [photographer, setPhotographer] = useState('')
  const [time, setTime] = useState('')
  const [coinName, setCoinName] = useState('')
  const [currentCoinPrice, setCurrentCoinPrice] = useState('')
  const [lowPrice, setLowPrice] = useState('')
  const [highPrice, setHighPrice] = useState('')


  useEffect(() => {

    const apiUrl = 'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature';
    const fetchApi = () => {
      
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setHomePageImage(data.urls.regular)
          setPhotographer(data.user.name)
        })
     .catch(err => {
       setHomePageImage("https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080")
       console.log(err)
       setPhotographer('Abbas Khan')
     })
      
    }
    fetchApi()
  }, [])

  console.log(homePageImage)

    const getCurrentTime = () => {
      const current = new Date()
      
      const currentTime = current.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(currentTime)
      console.log(currentTime)
    }
    // console.log("se time dai", time)
    
  setInterval(getCurrentTime, 1000)


  useEffect(() => {
    const getEthereumData = () => {
      fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCoinName(data.name)
        setCurrentCoinPrice(data.market_data.current_price.usd)
        setLowPrice(data.market_data.low_24h.usd)
        setHighPrice(data.market_data.high_24h.usd)
      })
    }
    getEthereumData()
  }, [])

  // navigator.geolocation.getCurrentPosition(position => {
  //   fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
  //   .then(response => {
  //      if(!response.ok) {
  //        throw Error("Weather data not available!")
  //      }
  //      return response.json()
  //   })
  //   .then(data => {
  //     const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  //     const temperature = data.name.temp
  //     const country = data.name
  //   })
  //   .catch(err => {
  //     console.error(err)
  // })

  // }) For fetching the latest weather in your place


  return(
    <main>
      <img
      className='w-full max-h-screen bg-cover' 
      src={homePageImage}
      />
      <p className='fixed bottom-0 text-green pl-2 text-xl'>By: {photographer}</p>
      <h2
      className='fixed bottom-0 text-green flex items-center justify-center h-screen w-6/12 mx-80 my-4 text-5xl m-0'>{time}</h2>

      <div className='fixed top-0 text-green text-xl'>
      <p>{coinName}</p>
      <p>🎯: {currentCoinPrice}</p>
      <p>👆: {lowPrice}</p>
      <p>👇: {highPrice}</p>
      </div>
    </main>
  )
}

export default Home




