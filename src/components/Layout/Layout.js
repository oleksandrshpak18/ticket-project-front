import React from "react";
import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import css from './Layout.module.css';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={`${css.mTop}`}></div>
            <Outlet className={`${css.outlet}`}/>
            <Footer/>
        </div>

    );
};

export {Layout};