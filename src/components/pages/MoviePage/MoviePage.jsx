import Loader from 'components/pages/Loader/Loader';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import MovieList from '../MovieList/MovieList';
import { searchForWord } from 'services/api';

import css from './MoviePage.module.css'

const MoviePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const paramsForSearch = searchParams.size !== 0 ? searchParams.get("searchValue") : "";
    const [query, setQuery] = useState();
    const location = useLocation();
    const [inputValue, setInputValue] = useState(paramsForSearch);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (paramsForSearch === '') {
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


    const onFormSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        const searchData = e.currentTarget.elements.search.value;
        setSearchParams({ searchValue: searchData });
    };

    const onInputValue = (e) => {
        const value = e.currentTarget.value
        setInputValue(value);
    };


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label className={css.form} >
                    <input
                        className={css.formInput}
                        type="text"
                        name="search"
                        value={inputValue}
                        onChange={onInputValue}
                        placeholder="Search movies"
                        required />
                    <button className={css.formButton}>Search</button>
                </label>
            </form>
            {loader ? (<Loader />) : (
                paramsForSearch !== "" && <MovieList movieList={query} location={location} /> 
            )}
        </>
    )
}

export default MoviePage
