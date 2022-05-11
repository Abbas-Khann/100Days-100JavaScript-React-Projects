import React from "react";

export default function Table() {
    return (
        <div className="table-container">
            <table className="table-heading">
                <thead>
                    <tbody className="flex">
                        <td>Coin</td>
                        <td>Price</td>
                        <td>Price Diff</td>
                        <td>Market Cap :USD$</td>
                    </tbody>
                </thead>
                <hr />
            </table>
        </div>
    )
}