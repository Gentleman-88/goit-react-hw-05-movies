import React from 'react'
import { Link } from 'react-router-dom'

import css from './MovieList.module.css'


const MovieList = ({popularFilms, location}) => {
    return(
        <>
        {popularFilms &&
            (<ul className={css.movieList}>
            {popularFilms.map(film => 
                <li key={film.id}>
                    <Link className={css.Link} to={`/movies/${film.id}`} state={{ from: location }}>
                        <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                            alt={film.title}
                            className={css.moviePoster} />
                        <p className={css.filmTitle}>{film.title}</p>
                    </Link>
                </li>
            )}
        </ul>)
    }
        </>
    )
};

export default MovieList