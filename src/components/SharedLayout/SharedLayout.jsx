import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";


import css from './SharedLayout.module.css'
import Loader from "../Loader/Loader";

export const SharedLayout = () => {
    return(
        <>
            <header className={css.header}>
                <NavLink to="/" className={css.nav}>HOME</NavLink>
                <NavLink to="/movies" className={css.nav}>MOVIES</NavLink>
            </header>
            <main>  
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}