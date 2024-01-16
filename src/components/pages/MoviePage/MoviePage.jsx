import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import MovieList from '../../MovieList/MovieList';
import { searchForWord } from 'services/api';

import SearchForm from 'components/SearchForm';

const MoviePage = () => {

    const [searchParams] = useSearchParams();
    const paramsForSearch = searchParams.get("searchValue");
    const [query, setQuery] = useState();
    const location = useLocation();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (!paramsForSearch) {
            setLoader(false)
            return;
        }
        const searchReviewsFilms = async () => {
            try {
                const result = await searchForWord(paramsForSearch)
                setQuery(result)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoader(false);
            }
        };
        searchReviewsFilms();
    }, [paramsForSearch]);

    return (
        <>
            <SearchForm />
            {loader ? (<Loader />) : (
                paramsForSearch !== "" && <MovieList movieList={query} location={location} /> 
            )}
        </>
    )
}

export default MoviePage
