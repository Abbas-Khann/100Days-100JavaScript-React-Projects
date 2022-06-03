import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import NotesList from './Components/NotesList'
import { nanoid } from 'nanoid';

/*
Features in this app 
  character Count when the user counts
  delete on click on delete icon
  darkMode
  Date of the note
  search Functionality
  save the data to localStorage
*/

  const Home = () => {
   const [searchNote, setSearchNote] = useState('') 
   const [darkMode, setDarkMode] = useState(false)

  
  // We will need to save all the notes inside of an array which we will set up here
  const [notes, setNotes] = useState([{ 
    id: nanoid(), /// 1
    text: "This is my first Note",
    date: "01/06/2022"
  },
  
  { 
    id: nanoid(), // 2
    text: "This is my second Note",
    date: "01/06/2022"
  },
  
  { 
    id: nanoid(), // 3
    text: "This is my third Note",
    date: "01/06/2022"
  }
]);

    console.log(notes)

    const saveNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote]      
      setNotes(newNotes)

      console.log(text)
    }

    // in the filter method i'm checking out each note and seeing if the id of the note is not equal to that particular id
    const deleteNote = (id) => {
        const removeNotes = notes.filter((note) => {
        return note.id !== id
        
      })
      setNotes(removeNotes)
      console.log(id)
    }

    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('key'));
      if(savedNotes) {
        setNotes(savedNotes)
      }
      console.log("Saved Notes",savedNotes)
      
    }, [])
    
    useEffect(() => {
      localStorage.setItem('key', JSON.stringify(notes))
    }, [notes])



  return (
    <main className={`font-mono ${darkMode && "dark"}`} >
      <div className="dark:bg-[#10172a] min-h-screen">
        <Header 
        setSearchNote = {setSearchNote}
        setDarkMode = {setDarkMode}
        darkMode = {darkMode}
        />
        <NotesList 
        notes={notes.filter((note) => {
          return note.text.toLowerCase().includes(searchNote)
        })}
        saveNote={saveNote}
        handleDeleteNote = {deleteNote}
        />
        </div>
    </main>
  )
}


export default Home


/*
step 1 -> Make the notes Dynamic
step2 -> Add a new note -> save the note onclick
*/ 