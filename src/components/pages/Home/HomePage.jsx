import Loader from 'components/pages/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { PopularFilms } from 'services/api';

import css from './Home.module.css'
import PopularList from '../PopularList/PopularList';

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
      <div>
        {loader && <Loader />}
        <h1 className={css.title}>Tranding Today</h1>
        <PopularList popularFilms={popularFilms} location={location} />
      </div>
    </>
  )
}

export default HomePage