import Loader from 'components/pages/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { searchForId } from 'services/api';

import css from './MovieDetails.module.css'

const MovieDetails = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const [backlocation] = useState(location.state?.from ?? '/');

  useEffect(() => {
    const searchPopularFilms = async () => {
      try {
        const resault = await searchForId(movieId);
        console.log(resault);
        setMovie(resault)
      } catch (error) {
        console.error(error)
      }
      setLoader(false)
    }
    searchPopularFilms()
  }, [movieId])

  return (
    <>
        {loader && <Loader />}
        {movie && (
            <>
        <Link to={backlocation}>
        <button className={css.goBackButton}>Go back</button> 
          </Link>
          <h2 className={css.movieTitle}>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
          <div className={css.container}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className={css.moviePoster} />
          <div className={css.movieInfoContainer}>
          <div className={css.movieInfo}>
            <p className={css.userScore}>User Score: {String(movie.popularity).replace(/\./g, "").slice(0, 2)}%</p>
            <h3 className={css.subTitles}>Overview</h3>
            <p className={css.movieInformation}>{movie.overview}</p>
            <h3 className={css.subTitles}>Genres</h3>
            <p className={css.movieInformation}>{movie.genres.map(item => item.name).join(', ')}</p>
              </div>
            </div>
            </div>
            <div className={css.additionalDiv}>
            <p className={css.additional}>Additional information</p>
            <ul className={css.additionalList}>
                <li><Link to='cast' className={css.additionalItem}>Cast</Link></li>
                <li><Link to='reviews' className={css.additionalItem}>Revievs</Link></li>
              </ul>
              </div>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
        </>
        )}
    </>
  )
}

export default MovieDetails
