import React from "react";

const BetAmount = (): JSX.Element => {
    return(
        <section className="mt-14 flex items-center justify-center flex-col">
            <h3
            className="font-extrabold text-3xl text-[#f3b236] text-center mb-5"
            >Enter the Amount you want to Bet!</h3>
            <input 
            className="bg-[#30c4bd] rounded-lg text-4xl text-center text-[#000] font-extrabold py-3 w-72" 
            placeholder="Amount in Eth"
            type="number"
            />
        </section>
    )
}

export default BetAmount