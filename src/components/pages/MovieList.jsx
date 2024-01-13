import React from 'react'
import { Link } from 'react-router-dom'


const MovieList = ({popularFilms, location}) => {
    return(
        <>
        {popularFilms &&
            (<ul>
            {popularFilms.map(film => 
                <li key={film.id}>
                    <Link to={`/movies/${film.id}`} state={{ from: location }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt="" />
                    {film.title}
                    </Link>
                </li>
            )}
        </ul>)
    }
        </>
    )
};

export default MovieList