import Link from "next/link";
import React from "react";
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import FullBlog from "../FullBlog";

const Blogcard = (props) => {

    const{ imageUrl, title, type ,description, deleteBlog, id } = props
    


    return(
        
        <div
        className="bg-cyan-900 bg-white dark:bg-white dark:text-black w-11/12 m-6 mx-auto flex flex-col rounded py-2 px-3  sm:max-w-sm sm:mx-3 sm:mx-auto"
        key={id}
        >
        <div
        className="flex justify-end mb-4"
        >
        {/* <FaPencilAlt 
        className="text-green-500 text-2xl mr-5 cursor-pointer"
        /> */}
        <FaTrash 
        className="text-red-500 text-2xl cursor-pointer"
        onClick={() => deleteBlog(id)}
        />
        </div>

        <img src={imageUrl} 
        className="w-full border-2 border-sky-300 h-72 object-cover"
        />
        
        <h
        className="mt-5 mb-3 text-xl"
        >{title}</h>
        <p
        className="mb-4"
        >{description}</p>
        <div
        
        >
        <span
        className="mb-4 bg-blue-500 text-white text-xl bold rounded inline px-2 mb-2"
        >
        {type}
        </span>   
        <hr />
        <Link href="/FullBlog">
        <a
        className="bg-white border-2 bg-violet-500 text-white rounded p-2 float-right cursor-pointer"
        >
        Open Blog
        </a>
        </Link>
        </div>    
        </div>
    )
}

export default Blogcard