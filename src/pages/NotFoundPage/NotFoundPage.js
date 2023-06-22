import React from 'react';
import css from './NotFoundPage.module.css'
import {NavLink} from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div>
            <h2>Ooops... Something wrong happened.</h2>
            <p>The page you are looking for doesn't exist</p>
            <NavLink to={'/'}>
                <div className={`}`}>Головна сторінка</div>
            </NavLink>
        </div>
    );
};

export {NotFoundPage};