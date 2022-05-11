import React from "react";
                // Here we have destructured all the props in the function argument itself
function Coin({image, name, price, priceChange, marketCap}) {
    return (
        <div className="body-container">
            <table>

                <thead className="coin-table">
                    {/* <tbody> */}
                    <td className="image-table"> <img className="coin-img" src={image} alt="coin-logo" /></td>
                    <td>{name}</td> 
                    <td>${price}</td>
                    {/* <td>{priceChange.toFixed(2)}%</td> */}
                    {/* Based on the condition the price change will be displayed */}
                    {
                        priceChange > 0 ?
                        <td className="green">+{priceChange.toFixed(2)}%</td> :
                        <td className="red">{priceChange.toFixed(2)}%</td>
                    }
                    {/* Mkt Cap: Usd$ */}
                    {/* .toLocaleString() will display the string on the basis of USD in this case, But that can be changed in the api */}
                    <td>{marketCap.toLocaleString()}</td>
                    {/* </tbody> */}
                    
                </thead>
                    <hr />
            </table>

        </div>
    )
}

export default Coin