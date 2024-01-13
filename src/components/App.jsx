import React from 'react';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import MoviePage from './pages/MoviePage';
import CastPage from './pages/CastPage';
import ReviewsPage from './pages/ReviewsPage';

export const App = () => {
    return (
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />}/>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
            </Routes>
    );
};
