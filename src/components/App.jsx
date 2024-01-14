import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MoviePage from './pages/MoviePage/MoviePage';
import CastPage from './pages/Cast/CastPage';
import ReviewsPage from './pages/Reviews/ReviewsPage';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />}/>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<CastPage />} />
            <Route path="/movies/:movieId/reviews" element={<ReviewsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>    
            </Routes>
    );
};
