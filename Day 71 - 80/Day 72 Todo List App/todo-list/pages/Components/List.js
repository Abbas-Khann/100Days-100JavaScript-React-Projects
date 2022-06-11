import React from "react";
import {TiDeleteOutline} from 'react-icons/Ti'
import {TiInputCheckedOutline} from 'react-icons/Ti'

const List = (props) => {

    const {id, text, deleteToDos, completedToDos} = props

    const handleDeleteToDos = () => {
        deleteToDos(id)
    }

    return(
        <div className="my-4 flex flex-col justify-between items-center mt-7">
            <p className="py-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl rounded px-3 sm: w-10/12 flex justify-between pb-3"
            >
            {text} 
            <div className="flex items-center">
            <TiDeleteOutline
            onClick={handleDeleteToDos}
            className="text-3xl sm: text-5xl text-white cursor-pointer"
            />
            <TiInputCheckedOutline 
            onClick={() => completedToDos(id)}
            className="text-3xl sm: text-5xl text-white cursor-pointer"/>
            </div>
            </p>
        </div>
    )
}

export default List