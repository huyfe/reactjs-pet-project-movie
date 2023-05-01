import React from "react";
const MovieCard = ({movie}) => {
    return (
        <li className="movie-card" key={movie.key}>
            <div className="movie-poster"><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png'} /></div>
            <h3 className="movie-title">{movie.Title}</h3>
            <div className="movie-year">{ movie.Year }</div>
        </li>
    )
}
export default MovieCard;