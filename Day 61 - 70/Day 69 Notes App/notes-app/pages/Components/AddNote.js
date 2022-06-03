import React,{useState, useEffect} from 'react'
import { BiSave } from 'react-icons/bi'


const AddNote = (props) => {

    const { saveNote } = props

    const[notesText, setNotesText] = useState('')
    const remainingCharacters = 200;

    const handleChange = (event) => {
        const stringLength = event.target.value.length;
        if(remainingCharacters -  stringLength >= 0) {
            setNotesText(event.target.value)
        }
        else if(remainingCharacters - stringLength < 0) {
            alert("Maximum Number of Characters exceeded!")
        }
    }

    // Now that we have set up the value of the note we will save the note after the save emoji is clicked

    const handleSaveNote = () => {
        const notesWithoutWhiteSpacesLength = notesText.trim().length
        if(notesWithoutWhiteSpacesLength > 0) {
            saveNote(notesText)
            setNotesText('')
        }
        console.log(notesText)
        console.log(notesWithoutWhiteSpacesLength)

    }
    
    // console.log(notesText.length)


    // console.log(remainingCharacters)

    return(
        <div className="h-64 bg-[#5EE6EB] max-w-sm flex flex-col justify-between rounded-xl my-1 p-3 px-19">
            <textarea
            className="bg-[#5EE6EB] resize-none outline-none"
            rows='8'
            columns='10'
            placeholder="Type to add a note..."
            onChange={handleChange}
            >
            </textarea>

            <div className="flex justify-between p-1">
                <small className="text-base ">{remainingCharacters - notesText.length} Remaining</small>
                <BiSave
                className="text-2xl hover:cursor-pointer"
                onClick={handleSaveNote}
                />
            </div>
        </div>
    )
}

export default AddNote