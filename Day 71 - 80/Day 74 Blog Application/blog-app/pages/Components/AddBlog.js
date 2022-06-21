import React, {useState} from "react";
import { nanoid } from "nanoid";

const AddBlog = (props) => {

    const {toggleModal, addNewBlog} = props
    const [form, setForm] = useState({
        id: nanoid(),
        imageUrl: "",
        title: "",
        type: "",
        description: ""
    })
    
    console.log(form)

    const handleChange = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }



    const handleAddBlog = (value) => {
        if(form.imageUrl.length > 0 && form.title.length > 0 && form.type.length > 0 && form.description.length > 0) {
            addNewBlog(value)
            toggleModal()
        }
        else {
            alert("Please fill in all the input boxes")
        }
    }

    return(
        // <>
        // {modal &&   (
            
            
            <div
            className={`flex items-center flex-col bg-lime-50 mx-auto w-11/12 rounded px-5 pb-10  sm:w-5/12 px-7 dark:bg-white dark:text-black `}
            // key={id}
            >
            <h
            className="border-b-2 text-2xl py-2 my-4"
            >Add a new Blog</h>
            
            <h
            className="text-2xl py-2 w-full"
            >Image URL</h>
            <input 
            className="bg-blue-300 w-full py-3 rounded px-4 text-xl"
            onChange={handleChange}
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            />
            <h
            className="text-2xl py-2 w-full"
            >Title</h>
            <input 
            className="bg-red-300 w-full py-3 rounded px-4 text-xl"
            onChange={handleChange}
            type="text"
            name="title"
            value={form.title}
            />
            
            <h
            className="text-2xl py-2 w-full"
            >Type</h>
            <input 
            className="bg-fuchsia-300 w-full py-3 rounded px-4 text-xl"
            onChange={handleChange}
            type="text"
            name="type"
            value={form.type}
            />
            
            <h
            className="text-2xl py-3 w-full"
            >Description</h>
            <textarea 
            className="w-full pb-36 border-b-2 text-xl dark:text-black dark:bg-red-100"
            onChange={handleChange}
            type="text"
            name="description"
            value={form.description}

            />
            <div className="flex items-center justify-end w-full mt-4">
            <button
            className="bg-violet-300 px-3 py-2 rounded mr-5 text-lg"
            onClick={toggleModal}
            >Close</button>
            <button
            className="bg-violet-300 px-3 py-2 rounded text-lg"
            onClick={() => handleAddBlog(form)}
            >Save Changes</button>
            </div>
            </div>
            // )}
            
            // </>
            )
        }
        
        
        export default AddBlog