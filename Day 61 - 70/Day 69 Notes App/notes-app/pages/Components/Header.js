import React, {useState} from 'react'
import { MdDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

const Header  = (props) => {
    const { setSearchNote, setDarkMode, darkMode } = props
    

    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearchNote(event.target.value)
    }

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div>
        <div className='flex justify-around mb-8 py-5 dark:text-white'>


            <h1 className='text-5xl'>Notes</h1>
            {darkMode ? <MdDarkMode className='cursor-pointer text-4xl'
            onClick={toggleDarkMode}
            /> 
            :
            <MdOutlineLightMode className='cursor-pointer text-4xl'
            onClick={toggleDarkMode}
            />
        }
        
        </div >

        <div className='flex items-center flex-col'>

            <input className='bg-blue-100 mx-5 py-2 rounded-lg w-10/12 outline-none text-left px-5 mb-4'
            type='text' 
            onChange={handleSearch}
            
            placeholder=' Search...' 
            />
        </div>

        </div>
    )
}

export default Header