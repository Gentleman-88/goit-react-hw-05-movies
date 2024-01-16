import React from 'react'
import { Link } from 'react-router-dom'

import css from './MovieList.module.css'


const MovieList = ({movieList, location}) => {
    return(
        <>
        {movieList &&
            (<ul className={css.movieList}>
            {movieList.map(film => 
                <li key={film.id}>
                    <Link className={css.Link} to={`/movies/${film.id}`} state={{ from: location }}>
                        <img src={film.backdrop_path ? (`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`):('https://kartinki.pics/uploads/posts/2022-03/thumbs/1647105513_3-kartinkin-net-p-kartinki-so-znakom-voprosa-3.jpg')}
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