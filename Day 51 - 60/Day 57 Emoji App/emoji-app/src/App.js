import React from 'react';
import './App.css';
import EmojiData from './EmojiData';
import Header from './Header.js'

function App() {
  // Fetching data dynamically through an api instead of the data.js file
  // const [emoji, getEmoji] = React.useState()
  // React.useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("https://emoji-api.com/emojis?access_key=54c09a5ee7a813f77b5abd994a21feb9e556b72e")
  //     // const response = await fetch("https://emoji-api.com/emojis?search=dog&access_key=54c09a5ee7a813f77b5abd994a21feb9e556b72e")
  //     const data = await response.json()
  //     console.log(data)
  //     // getEmoji(() => {
  //     //     return data[0].character
  //     // })

  //   }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // getData()
  // }, [])
    const [search, setSearch] = React.useState("")
    const [data, setData] = React.useState([])
   
    React.useEffect(() => {
      
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
      setData(newData)
    }, [search])

    // console.log(data) to check if the data is actually being rendered
    
    // function getEmoji() {
    //   let emojiMap =  data.map((emoji) => {
    //     return <div className='main-div'>
    //      <div className='emoji-div'>{emoji.title}</div>
    //      <div className='emoji-div'>{emoji.symbol}</div>
    //     </div>
    //   })
    //   return emojiMap
    // }

    return(
      <div className="main-container">   
        <Header 
        setSearch = {setSearch}
        search = {search}
        />
        {data.map(emoji => 
          <div>
              <div className='emoji-div'>{emoji.title} {emoji.symbol}</div>
          </div>
        )
        }
      </div>
    )
    
}

export default App;
