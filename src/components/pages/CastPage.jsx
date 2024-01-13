import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchForCast } from 'services/api';

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
        <ul>
        {castResult?.map(actor =>
          <li key={castResult.some(child => child.id === actor.id)}>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt="" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        )}
      </ul>
      )
      }
    </>
  )
}

export default CastPage
