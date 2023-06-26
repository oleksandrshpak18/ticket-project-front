import React from 'react';
import css from './UserForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faTruck, faWallet} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
import slugify from "slugify";

const UserForm = () => {

    return (
        // <div className={css.r}>
        //     <p>Контакти</p>
        //     <p>Доставка</p>
        //     <p>Оплата</p>
        //
        //
        // </div>
        <div className={`${css.container}`}>
            <div className={`${css.contactsContainer}`}>
                <div className={`${css.contactsBlock}`}>
                    <div>
                            <FontAwesomeIcon icon={faAddressBook} className={`${css.Icon}`}/>
                    </div>
                            <h3> Contacts</h3>
                </div>

                    <div className={`${css.formContainer}`}>
                        <form >
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="phone"
                                    defaultValue="+380"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="surname"
                                    placeholder="Your surname"
                                />
                            </div >
                            <div className={`${css.formField}`}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email address"
                                />
                            </div>
                        </form>
                </div>
            </div>
            <div className={`${css.deliveryContainer}`}>
                <div className={`${css.deliveryBlock}`}>
                    <div>
                        <FontAwesomeIcon icon={faTruck} className={`${css.Icon}`}/>
                    </div>
                    <h3> Delivery</h3>
                </div>
                <div className={`${css.checkboxD}`}>
                    <input type="checkbox" id="myCheckbox" checked/>
                    <label >To E-mail</label>
                </div>
            </div>
            <div className={`${css.paymentContainer}`}>
                <div className={`${css.paymentBlock}`}>
                    <div>
                        <FontAwesomeIcon icon={faWallet} className={`${css.Icon}`}/>
                    </div>
                    <h3> Payment</h3>
                </div>
                <div className={`${css.checkboxP}`} >
                    <input type="checkbox" id="myCheckbox" checked/>
                    <label >Bank card</label>

                </div>
            </div>
            <p className={`${css.paymentInfo}`}>We accept cards from any bank in the world.</p>
        </div>
            );
};

export {UserForm};