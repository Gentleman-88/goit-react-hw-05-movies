import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchForReviews } from 'services/api';

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
                        <ul>
                            {reviews.map(review => 
                            <li key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </li>)}
                        </ul>
                    ) : (
                        <p>We don't have any reviews for this movie</p>
                    )
            )}
        </>
    )
};

export default ReviewsPage
