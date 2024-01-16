import React, { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import("./pages/Home/HomePage"))
const Movies = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/CastPage'));
const Reviews = lazy(() => import('./Reviews/ReviewsPage'));

export const App = () => {
    return (
        <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />  
        </Route> 
        </Route> 
        <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
    );
};
