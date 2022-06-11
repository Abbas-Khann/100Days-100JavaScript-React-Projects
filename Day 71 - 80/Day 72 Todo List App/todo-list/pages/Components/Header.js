import React, {useState, useRef} from 'react'
import {MdDarkMode} from 'react-icons/Md'
import {MdOutlineLightMode} from 'react-icons/Md'

const Header = (props) => {

    const {darkMode, setDarkMode, saveToDo } = props
    const [inputText, setInputText] = useState('')
    const [textLength, setTextLength] = useState(0)

    const inputRef = useRef()

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    const handleChange = (event) => {
        let textLen = event.target.value.length;
        setTextLength(textLen)
        setInputText(event.target.value)       
    }

    const saveToDoList = () => {
        if(textLength > 0) {
            saveToDo(inputText)
            setInputText('')
            setTextLength(0)
        }
        inputRef.current.value = ""
    }



    return(
        <main>
        <nav className='flex justify-around items-center pb-3 bg-gradient-to-r from-indigo-600 to-blue-600 mb-5 pt-6 pb-7 '>
           <h1 className='text-center text-white text-3xl m-0 dark:text-white'>
            To do List App
            </h1>
            {darkMode ? <MdDarkMode 
            className='text-white text-5xl cursor-pointer'
            onClick={toggleDarkMode}
            />
             :
             <MdOutlineLightMode 
             className='text-white text-5xl cursor-pointer' 
             onClick={toggleDarkMode}
             />      
        }
        </nav>
            <div className='flex justify-center'>
           <input 
           className=' bg-gradient-to-r from-cyan-800 to-cyan-400 py-3.5 w-6/12 pl-4 text-xl text-white outline-none sm:w-4/12'
           placeholder='Add Task...'
           onChange={handleChange}
           ref={inputRef}
           />
           <button 
           className='text-white px-5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:bg-gradient-to-l from-purple-600 to-teal-300 '
        //    onClick={ saveToDo }
           onClick={saveToDoList}

           >Add Task</button>
           </div>   
           </main>  
    )
}

export default Header