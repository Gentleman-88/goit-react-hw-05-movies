import Loader from 'components/Loader';
import React, { Suspense, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { searchForId } from 'services/api';

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
        <button>Go back</button> 
        </Link>
            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
            <p>User Scoce: {String(movie.popularity).replace(/\./g, "").slice(0, 2)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(item => item.name).join(', ')}</p>
            <p>Additional information</p>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Revievs</Link></li>
            </ul>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
        </>
        )}
    </>
  )
}

export default MovieDetails
