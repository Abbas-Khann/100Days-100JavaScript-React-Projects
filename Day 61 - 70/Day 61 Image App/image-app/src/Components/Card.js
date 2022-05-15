import React from "react";

const Card = (props) => {
    const { cards } = props 

    const p1 = {
        fontSize: "1.2rem",
        color: "darkblue"
    }

    const p2 = {
        fontSize: "1.1rem",
        margin: '5px 0',
    }
    const span1 = {
        fontSize: '1.2rem',
        background: '#fc5184',
        padding: '5px',
        borderRadius: '30px',
        color: 'whitesmoke',
    }
    const span2 = {
        fontSize: '1.2rem',
        background: '#fc5184',
        marginLeft: '15px',
        padding: '5px',
        borderRadius: '30px',
        color: 'whitesmoke',

    }


    return (
        <main  className="main-card">
            <div className="card-data">
                <div className="card-image">
                {cards.map((card) => {
                    return <div className="card-image-data">
                        <img src={card.webformatURL} alt=""/>
                                <div className="white-bg">
                               <p style={p1}>Photo By: {card.user}</p>
                               <p style={p2}> <i className="fas fa-eye"></i> <span>Views: </span>{card.views}</p>
                               <p style={p2}> <i className="fas fa-download"></i> <span>Downloads: </span>{card.downloads}</p>
                               <p style={p2}> <i className="fas fa-heart"></i> <span>Likes: </span>{card.likes}</p>
                               <p style={p2}> <i className="fas fa-comments"></i> <span>Comments: </span>{card.comments}</p>
                               <div className="tags">
                             
                                   <span style={span1}>#{card.tags.split(',')[0]} </span>
                                   <span style={span2}>#{card.tags.split(',')[1].trim()}</span>
                                   {/* <span>#{card.tags}</span> */}
                               </div>
                                   </div>
                            </div>
                     
                })}
                </div>
                
                {/* console.log(cards) */}
            </div>

        </main>
    )
}



export default Card

