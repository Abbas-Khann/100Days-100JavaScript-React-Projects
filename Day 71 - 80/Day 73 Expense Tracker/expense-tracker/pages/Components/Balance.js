import React from "react";
import { useGlobalContext } from "../../Context/Context";

const Balance = () => {

  const { total, totalExpenses, totalIncome } = useGlobalContext();

    return(
        <div
        // className={`border-amber-500 flex flex-col items-center justify-center w-3/12 mx-auto rounded  ${darkMode ? `bg-[#151c61] text-white` : `bg-white`}`}
        className="flex flex-col items-center w-full"
        >
        <h1 className='text-xl p-2 text-purple-500 text-bold'>
          Expense Tracker
        </h1>
        <h1 className='py-0 text-base'>
          Your Balance
        </h1>
        <small
        className='text-xl'
        >
          ${total}
        </small>

        <div className='flex items-center justify-center my-4 pb-3 border-2 border-rounded border-black-500 rounded'>
          <div className='mx-6'>
          <p className='text-base '>Income </p>
          <p className='text-center text-green-500'>${totalIncome}</p>
          </div>
          <div className='mx-6'>
          <p className='text-base'>Expense </p>
          <p className='text-center text-red-500'>${totalExpenses}</p>
          </div>
        </div>
        </div>
    )
}

export default Balance