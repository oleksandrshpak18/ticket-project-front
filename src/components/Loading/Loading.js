import React from 'react';

import css from './Loading.module.css'

const Loading = () => {
    return (
        <div className={`${css.container}`}>
            <div className={`${css.loading_spinner}`}></div>
        </div>
    );
};

export {Loading};