import React, {useEffect, useState} from 'react';

import css from './Checkout.module.css'
import {UserForm} from "../UserForm/UserForm";
import {OneTicket} from "../OneTicket/OneTicket";
import {Navigate, NavLink, useLocation} from "react-router-dom";
import slugify from "slugify";
import {connections} from "../../data";

const Checkout = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)
    const [chosenSeats, setChosenSeats] = useState(new Array())
    const [countedPrice, setCountedPrice] = useState(0)

    useEffect(() => {
        if (state != null) {
            if(state.chosenSeats != null) {
                setChosenSeats(state.chosenSeats)
            }
            if(state.ev) {
                setEvent(state.ev)
            }
        }
    }, [state])

    useEffect(() => {
        const res = chosenSeats
            .map((x) => parseInt(x.price))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setCountedPrice(res);
    }, [chosenSeats]);

    const removeFromChosenSeatsByIndex = (index) => {
        const updatedArray = chosenSeats.filter((_, i) => i !== index);
        setChosenSeats(updatedArray);
    }


    if (!state || !state.chosenSeats || (state.chosenSeats && event && chosenSeats.length === 0)) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div className={`${css.flex_container}`}>
            <div className={`${css.left}`}>
                <UserForm/>
            </div>

            <div className={css.right}>
                <div className={`${css.chosenTicketsBlock} ${(chosenSeats.length !== 0) ? css.block : ''}`}>
                    {
                        chosenSeats.length === 0 &&
                        <div>
                            You haven't chosen any seat yet
                        </div>
                    }
                    {
                        chosenSeats.length !== 0 &&
                        <div className={`${css.fullWidth}`}
                        >
                            {
                                chosenSeats.map((elem, index) => (
                                    <OneTicket key={index} elem={elem} deletingFunction={removeFromChosenSeatsByIndex} index={index}/>
                                ))
                            }
                        </div>
                    }
                </div>
                <div className={`${css.price_container}`}>
                    <div className={css.textToLeft}>
                        <div >Tickets: </div>
                        <div >Service fee:</div>
                        <div >Total price:</div>

                    </div>
                    <div className={css.textToRight}>
                        <div >{countedPrice} ₴</div>
                        <div >{countedPrice * 0.05} ₴</div>
                        <div >{countedPrice * 1.05} ₴</div>
                    </div>
                </div>
                <div className={css.navContainer}>
                        <button disabled={chosenSeats.length===0} className={css.button}>Purchase</button>

                </div>
            </div>
        </div>
    );
};

export {Checkout};