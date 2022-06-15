import React,{useContext, createContext, useState, useReducer} from "react";

export const IndexContext = createContext();

        const expenseData = [{ id: 1, text: "cash", amount: 500 }];
        let initialState = expenseData;

        const reducer = (state, action) => {
            if (action.type === 'ADDTNX') {
                return action.payload.text && action.payload.amount
                ? [...state, action.payload] : [...state]
            }
            
            if (action.type === "FILTER") {
                return state.filter((item) => {
                    return item.id !== action.payload
                })
            }
        }

    const IndexProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);    
    
    const x = state.map((item) => {
        return +item.amount
    })

    const total = x.reduce((acc, val) => acc + val, 0)

    const income = state.map((item) => {
        return item.amount > 0 && +item.amount
    })

    const totalIncome = income.reduce((acc, val) => acc + val, 0)

    const expenses = state.map((item) => {
        return item.amount < 0 && +item.amount
    })

    const totalExpenses = expenses.reduce((acc, val) => acc + val, 0)

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <IndexContext.Provider value={ {darkMode, toggleDarkMode, dispatch, state, total, totalIncome, totalExpenses} }>
            {children}
        </IndexContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(IndexContext);
}

export { IndexProvider }