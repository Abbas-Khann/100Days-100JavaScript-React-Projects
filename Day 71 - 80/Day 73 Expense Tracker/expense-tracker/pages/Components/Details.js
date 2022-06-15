import React from "react";
import { useGlobalContext } from "../../Context/Context";


const Details = () => {
    const { state, dispatch } = useGlobalContext();

    const filterId = (id) => {
        return dispatch({ type: 'FILTER', payload: id })
    } 

    return state.map((item) => { 
        return item.text || item.amount ? (
            <div 
            key={item.id}
            className="flex items-center w-56"
            >
            <div className="flex justify-between"
            >
            <section className="bg-green-400 flex justify-between rounded my-1 p-1 w-52 ">
            <span className="text-sm">
                {item.text}
            </span>
            <span className="text-sm">
                {item.amount}
            </span >
            </section>
            </div>
            <span
            onClick={() => filterId(item.id)}
            >        
            <img 
            className="w-5 h-full cursor-pointer bg-zinc-100"
            alt="delete"
            // src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/undefined/external-delete-interface-dreamstale-lineal-dreamstale.png"/>
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/44/undefined/external-cross-essentials-tanah-basah-basic-outline-tanah-basah.png"/>
            </span>
            </div>
        ): 
        null
    })
}

export default Details