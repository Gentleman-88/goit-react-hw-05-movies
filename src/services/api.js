import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';
const key = '6a0ae84b6fdfda8c762945c26eefc4dc';


const endUrl = {
    trending: '/trending/movie/day',
    idSearch: '/movie/',
    credits: '/credits',
    reviews: '/reviews',
    wordSearch: '/search/movie'
};

export const PopularFilms = async () => {
    try{
        const popularFilms = await axios.get(`${baseURL}${endUrl.trending}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return popularFilms.data.results;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForId = async (idMovie) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.idSearch}${idMovie}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return result.data;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForCast = async (idMovie) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.idSearch}${idMovie}${endUrl.credits}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return result.data.cast;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForReviews = async (idMovie) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.idSearch}${idMovie}${endUrl.reviews}?api_key=${key}&page=1&language=en-US&include_adult=false`);
        return result.data.results;
    } catch(error) { 
        console.error("Error:", error.message);
    }
};

export const searchForWord = async (word) => {
    try{
        const result = await axios.get(`${baseURL}${endUrl.wordSearch}?api_key=${key}&page=1&query=${word}&language=en-US&include_adult=false`);
        return result.data.results;
    } catch(error) { 
        console.error("Error:", error.message);
    }
}