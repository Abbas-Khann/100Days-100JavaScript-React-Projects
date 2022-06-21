import React, {useState} from "react"
import AddBlog from "./Components/AddBlog"
import Navbar from "./Components/Navbar"
import Blogcard from "./Components/Blogcard"
import { nanoid }  from 'nanoid'

const Home = () => {

  const [darkMode, setDarkMode] = useState(false)
  const [modal, setModal] = useState(false)
  const [blogs, setBlogs] = useState([
    {
      id: nanoid(),
      imageUrl: "https://limametti.com/wp-content/uploads/2022/06/transfert-de-sadio-mane-liverpool-accepte-enfin-la-proposition-du-bayern.jpg",
      title: "Sadio Mane Transfer",
      type: "Footie",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: nanoid(),
      imageUrl: "https://th.bing.com/th/id/R.c7257059934bdffdf8a144a7c5e78b0a?rik=7YlFfxWUlTUkhg&pid=ImgRaw&r=0",
      title: "Kimmich Beast",
      type: "Footie",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: nanoid(),
      imageUrl: "https://th.bing.com/th/id/R.fc4470295afb20485ac83f38fa6e8f77?rik=H60NbPoJgNstOg&pid=ImgRaw&r=0",
      title: "Mazraoui Transfer",
      type: "Footie",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: nanoid(),
      imageUrl: "https://img.bleacherreport.net/img/images/photos/003/726/488/hi-res-47e2dab16e19c0ce46184c862b6c8f48_crop_north.jpg?1519745937&w=3072&h=2048",
      title: "Robert Lewandowski Saga",
      type: "Footie",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

  ])
  const deleteBlog = (id) => {
    const filteredBlogs = blogs.filter((blog) => {
      return blog.id !== id 
    })
    setBlogs(filteredBlogs)
  }
  
  const getDynamicBlogs = blogs.map((blog) => {
    return <Blogcard key={blog.id} {...blog} darkMode={darkMode} deleteBlog={deleteBlog}
    />
  })

  const addNewBlog = (newValue) => {
    setBlogs((prevState) => {
      return[...prevState, newValue]
    });
  }


  const toggleModal = () => {
    setModal(prevState => !prevState)
}


  return (
      <main
      className={`${darkMode && 'dark'} dark:bg-[#10172a]`}
      >
        <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setModal={setModal}
        toggleModal={toggleModal}
        />
        <div
        className="dark:bg-[#10172a]"
        >
          {modal && 
          <AddBlog 
          modal={modal}
          toggleModal={toggleModal}
          addNewBlog={addNewBlog}
          />
        }
       
          </div>

        <div
        className="flex flex-wrap dark:bg-[#10172a]"
        >

        {getDynamicBlogs}

        </div>
        
      </main>
    
  )
}

export default Home