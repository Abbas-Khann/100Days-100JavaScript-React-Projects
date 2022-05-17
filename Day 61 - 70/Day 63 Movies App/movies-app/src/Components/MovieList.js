import React from "react";



const MovieList = (props) => {

    const { filmList } = props
    const imageURL = "https://image.tmdb.org/t/p/w500"
    console.log("filmlist", filmList)

    return (
        <div className="movie-list">

            {filmList?.map((movie) => (
            <div key={movie.id} className="complete-list">
                <div className="movie-img">
                    <img src={imageURL + movie.poster_path} className="image" alt=""/>
                </div>
                <div>
                    <p>{movie.title}</p>
                </div>
            </div>

            ))}

        </div>
    )
}

export default MovieList