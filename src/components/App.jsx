import React, { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';

const Home = lazy(() => import("./pages/Home/HomePage"))
const Movies = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast/CastPage'));
const Reviews = lazy(() => import('./pages/Reviews/ReviewsPage'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />}/>
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>    
            </Routes>
    );
};
