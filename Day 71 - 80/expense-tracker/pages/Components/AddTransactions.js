import React, { useState } from "react";
import { useGlobalContext } from "../../Context/Context";
import { nanoid } from "nanoid";

const AddTransactions = () => {
    const {darkMode, dispatch} = useGlobalContext();
    const [transactions, setTransactions] = useState({ 
        id: nanoid(),
        text: "",
        amount: ""
     })


     const handleChange = (event) => {
         setTransactions((v) => {
             return {
                 ...v,
                 [event.target.name] : event.target.value,
             }
         })
     }

     const handleSubmit = () => {
         setTransactions({
             id: nanoid(),
             text: "",
             amount: ""
         });
         return dispatch({ type: "ADDTNX", payload: transactions })
     }

     
    return(
        <div 
        // className="mt-4 w-3/12 flex flex-col justify-center items-center"
        >
            <h1 className="text-center font-bold border-b-2 border-b-gray-500 mb-2">
                Add New Transactions
            </h1>
            <div>
            <p className="text-lg mb-1">Transactions</p>
            <input 
            className={`bg-sky-200 w-72 rounded p-1 mb-1 text-black ${darkMode ? `text-black` : `text-white`}`}
            placeholder="Transaction Type?"
            name="text"
            type="text"
            value={transactions.text}
            onChange={handleChange}

            />
            <p className="text-lg mb-1">Amount (Negative for Spendings)</p>
            <input 
            className={`bg-sky-200 w-72 rounded p-1 mb-1 text-black ${darkMode ? `text-black` : `text-white`}`}
            placeholder="Amount Spent?"
            name="amount"
            type="number"
            value={transactions.amount}
            onChange={handleChange}

            />
            </div>
            <div className="flex items-center justify-center mb-3">
            <button 
            className="bg-purple-400 my-2 rounded py-1 px-14"
            onClick={handleSubmit}
            >
            Add Transaction
            </button>
            </div>

        </div>
    )
}

export default AddTransactions