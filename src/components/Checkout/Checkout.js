import React from 'react';

import css from './Checkout.module.css'
import {UserForm} from "../UserForm/UserForm";

const Checkout = () => {
    return (
        <div>
            checkout page
            <UserForm/>
        </div>
    );
};

export {Checkout};