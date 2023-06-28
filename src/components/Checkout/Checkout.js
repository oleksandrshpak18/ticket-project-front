import React, {useEffect, useState} from 'react';
import stringify from 'json-stringify-pretty-compact';
import {Navigate, NavLink, useLocation} from "react-router-dom";
import slugify from "slugify";

import css from './Checkout.module.css'
import {UserForm} from "../UserForm/UserForm";
import {OneTicket} from "../OneTicket/OneTicket";
import {connections} from "../../data";
import {Loading} from "../Loading/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)
    const [chosenSeats, setChosenSeats] = useState(new Array())
    const [countedPrice, setCountedPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [requestResult, setRequestResult] = useState(null)
    const [customer1, setCustomer1] = useState(null)
    const [clicked, setClicked] = useState(false)

    useEffect(()=>{
        console.log(customer1);
    },[customer1])

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
            .map((x) => parseInt(x.ticketPrice))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setCountedPrice(res);
    }, [chosenSeats]);

    const removeFromChosenSeatsByIndex = (index) => {
        const updatedArray = chosenSeats.filter((_, i) => i !== index);
        setChosenSeats(updatedArray);
    }

    useEffect(()=>{
        handleClick();
    }, [customer1])

    const handleClick = () => {
        setClicked(!clicked)
        if(customer1 !== null) {
            setRequestResult(null)
            setIsLoading(true);
            const order = { customer: customer1, tickets: chosenSeats }
            console.log(JSON.stringify(order))
            console.log(order);
            fetch(`${connections.post_add_order}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: stringify(order),
            })
                .then(response => {
                    setIsLoading(false)
                    setRequestResult(response)
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error occurred');
                    }
                })
                .then((json) => {
                    // Handle the response data
                    console.log('success');
                    console.log(json);
                })
                .catch((err) => {
                    // Handle any errors
                    console.warn(err.message);
                });
        }
    };


    if (!state || !state.chosenSeats || (state.chosenSeats && event && chosenSeats.length === 0)) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div className={`${css.flex_container}`}>
            <div className={`${css.left}`}>
                <UserForm clicked={clicked} setter={setCustomer1}/>
            </div>
            <div className={`${css.resultColumn}`}>
                {isLoading && <Loading/>}
                {requestResult &&
                <div>
                    {requestResult.status === 200 &&
                        <div className={`${css.success}`}>
                            <FontAwesomeIcon size={`2xl`} icon={faCircleCheck} className={`${css.success_icon}`}/>
                            <div>
                                You have successfully purchased the tickets. Your tickets will be sent to your email soon.
                            </div>
                        </div>
                    }

                    {requestResult.status !== 200 &&
                        <div className={`${css.failed}`}>
                            <FontAwesomeIcon icon={faCircleCheck} className={`${css.failed_icon}`}/>
                            <div>
                                The error occurred while placing your order. Try again or change the specified seats, please.
                            </div>
                        </div>
                    }
                </div>}
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
                        <button type={'submit'} onClick={handleClick} disabled={chosenSeats.length===0} className={css.button}>Purchase</button>

                </div>
            </div>
        </div>
    );
};

export {Checkout};