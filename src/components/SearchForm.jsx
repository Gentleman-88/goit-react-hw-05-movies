import { useSearchParams } from 'react-router-dom';
import css from './MoviePage.module.css'
import { useState } from 'react';

const SearchForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const paramsForSearch = searchParams.get("searchValue");
    const [value, setInputValue] = useState(paramsForSearch);

        const onFormSubmit = (e) => {
        e.preventDefault();
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
                        value={value}
                        onChange={onInputValue}
                        placeholder="Search movies"
                        required />
                    <button className={css.formButton}>Search</button>
                </label>
            </form>
        </>
    )
}

export default SearchForm
