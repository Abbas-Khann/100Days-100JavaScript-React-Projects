import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = (props) => {
    const { notes, saveNote, handleDeleteNote } = props

    return (
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 p-3 max-w-7xl mx-auto'>
          {notes.map((note) => {
              return <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
          })}
          <AddNote 
          saveNote = {saveNote}
          />
        </div>
    )
}

export default NotesList