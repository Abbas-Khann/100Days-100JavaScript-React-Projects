import React from 'react'
import AddTransactions from './Components/AddTransactions'
import Balance from './Components/Balance'
import History from './Components/History'
import { useGlobalContext } from '../Context/Context'
const Home = () => {

  const {darkMode, toggleDarkMode} = useGlobalContext();
  
  return (
    <main 
    className={darkMode && 'dark'}
    >
    <section 
    className={`w-screen h-screen no-repeat bg-cover flex items-center flex-col transition-all duration-500 dark:w-screen h-screen no-repeat bg-cover ${darkMode ? `bg-[url('/images/second_img.png')]` : `bg-[url('/images/front_img.png')]`}`}
    >
      <div className='flex items-center justify-center h-32'>
    {
      darkMode ? <img src="https://img.icons8.com/dusk/64/undefined/smiling-sun.png" 
      className='cursor-pointer'
      onClick={toggleDarkMode}
      />
      : 
      <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/undefined/external-moon-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
      className='cursor-pointer'
      onClick={toggleDarkMode} />

    }
    </div>
    <div 
    className={`flex flex-col items-center justify-center rounded pt-3 py-5 px-8 gap-2 ${darkMode ? `bg-[#151c61] text-white` : `bg-white`}`}
    >
        <Balance 
        darkMode={darkMode}
        />
        <History />
        <AddTransactions />
        </div>
    </section>
    </main>
  )
}


export default Home