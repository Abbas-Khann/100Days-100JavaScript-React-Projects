import React, {useState} from "react";
import { MdDeleteForever } from 'react-icons/md'

const Note = (props) => {
    // const [date, setDate] = useState(new Date())
    // console.log(date)

    const { id, text, date, handleDeleteNote } = props

    const deleteNote = () => {
        handleDeleteNote(id)
    }
    return(
        <div className="h-64 bg-red-100 max-w-sm flex flex-col justify-between rounded-xl my-1 p-3 px-19" >
            <span className="text-base">{text}</span>
            <div className="flex justify-between p-1">
                <small className="text-base">{date}</small>
                <MdDeleteForever className="text-3xl hover:cursor-pointer"
                onClick={deleteNote}
                />
            </div>
        </div>
    )
}

export default Note