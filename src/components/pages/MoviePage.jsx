import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import MovieList from './MovieList';
import { searchForWord } from 'services/api';

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
                <label>
                    <input
                        type="text"
                        name="name"
                        value={inputValue}
                        onChange={onInputValue}
                        placeholder="Search movies"
                        required />
                    <button>Search</button>
                </label>
            </form>
            {loader ? (<Loader />) : (
                paramsForSearch !== "" && <MovieList movieList={query} location={location} /> 
            )}
        </>
    )
}

export default MoviePage
