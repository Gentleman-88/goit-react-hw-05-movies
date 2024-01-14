import Loader from 'components/pages/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchForReviews } from 'services/api';

import css from './Reviews.module.css'

const ReviewsPage = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const searchReviews = async () => {
      try {
        const result = await searchForReviews(movieId);
        setReviews(result);
      } catch (error) {
        console.error("Error:", error.message);
      }
      setLoader(false)
    }
    searchReviews()
  }, [movieId]);

  return (
        <>
      {loader ?
        (<Loader />) : (
                reviews && 
                    reviews.length > 0 ? (
                        <ul className={css.reviewsList}>
                            {reviews.map(review => 
                            <li key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </li>)}
                        </ul>
                    ) : (
                        <p className={css.noReviews}>We don't have any reviews for this movie</p>
                    )
            )}
        </>
    )
};

export default ReviewsPage
