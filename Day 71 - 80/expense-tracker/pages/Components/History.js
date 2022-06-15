import React from "react";
import Details from "./Details";


const History = () => {

    return(
        <div 
        className="w-9/12"
        // className="w-3/12 mx-auto flex flex-col justify-center items-center pt-2"
        >
            <h1
            className="border-b-2 border-b-gray-500 text-center font-bold"
            >History</h1>
            
            <div className="flex flex-col"
            
            >
                <Details />
                
            </div>

        </div>
    )

}

export default History