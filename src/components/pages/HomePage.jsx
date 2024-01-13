import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { PopularFilms } from 'services/api';
import MovieList from './MovieList';

const HomePage = () => {

  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    const searchPopularFilms = async () => {
      try {
        const resault = await PopularFilms();
        console.log(resault);
        setPopularFilms(resault)
      } catch (error) {
        console.error(error)
      }
      setLoader(false)
    }
    searchPopularFilms()
  }, [])

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <div>
        {loader && <Loader />}
        <h1>Tranding Today</h1>
        <MovieList popularFilms={popularFilms} location={location} />
      </div>
    </>
  )
}

export default HomePage