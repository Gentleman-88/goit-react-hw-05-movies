import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchForCast } from 'services/api';

import css from './Cast.module.css'

const CastPage = () => {

  const { movieId } = useParams();
  const [castResult, setCastResult] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const searchCastFilms = async () => {
            try{
                const result = await searchForCast(movieId);
                setCastResult(result);
            } catch (error) {
                console.error("Error:", error.message);
            };
      setLoader(false);
    }
    searchCastFilms()
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {castResult && (
        <ul className={css.castList}>
        {castResult?.map(actor =>
          <li key={castResult.some(child => child.id === actor.id)}>
            <img src={actor.profile_path ? (`https://image.tmdb.org/t/p/w200/${actor.profile_path}`):('https://sneg.top/uploads/posts/2023-06/1687937930_sneg-top-p-avatarki-vatsapa-instagram-9.png')} alt={actor.name} className={css.actorImg} />
            <div className={css.actorInfo}>
            <p className={css.actorName}>{actor.name}</p>
              <p><span className={css.actorName}>Character:</span> {actor.character}</p>
              </div>
          </li>
        )}
      </ul>
      )
      }
    </>
  )
}

export default CastPage
