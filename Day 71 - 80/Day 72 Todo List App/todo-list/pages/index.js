import React, {useState} from 'react'
import Header from './Components/Header'
import List from './Components/List'
import { nanoid } from 'nanoid';

const Home = () => {

  const [darkMode, setDarkMode] = useState(false)
  const [todos, setTodos] = useState([
    // {
    //   id: nanoid(),
    //   text: 'This is my first todo'
    // },
    // {
    //   id: nanoid(),
    //   text: 'This is my second todo'
    // },
    // {
    //   id: nanoid(),
    //   text: 'This is my third todo'
    // }
  ]);
  
  const saveToDo = (text) => {
    const newToDo = {
      id: nanoid(),
      text: text
    }
    const newToDos = [...todos, newToDo]
    setTodos(newToDos)
    
    console.log(text)
  }
  
  const deleteToDos = (id) => {
    const filteredToDos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredToDos)
  }

  const completedToDos = (id) => {
      const completed = todos.filter((todo) => {
        return todo.id !== id
      })
      alert('Are you sure you want to mark this task as completed?')
      setTodos(completed)
  }

  const todosList = todos.map((todo) => {
    return <List id={todo.id} text={todo.text} deleteToDos={deleteToDos} completedToDos = {completedToDos}/>
  })

  return (
    <main className={darkMode && 'dark'}>
      <div className='dark:bg-[#10172a] min-h-screen'>
        <Header 
        darkMode = {darkMode}
        setDarkMode = {setDarkMode}
        saveToDo = {saveToDo}
        />
        {todosList}

        </div>
    </main>
  )
}

export default Home



// make the todos dynamic
// log the text value by targeting it
// Take the input text from the input box and save the todo but in the process make sure you keep the previous state
// delete the todo by clicking on the cross icon
// Remove the todo by clicking on the tick icon and alert a message saying are you sure you want to mark this task as completed?