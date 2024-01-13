import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import MoviePage from './pages/MoviePage';

export const App = () => {
    return (
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />}/>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            </Routes>
    );
};
