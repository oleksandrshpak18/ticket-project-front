import React, {useEffect, useState} from 'react';

import css from './Booking.module.css'
import slugify from "slugify";

import {Navigate, NavLink, useLocation} from "react-router-dom";
import {connections} from "../../data";
import {Loading} from "../Loading/Loading";
const Booking = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)

    useEffect(() => {
        if (state != null) {
            // request data
            // console.log(`id: ${state.id}`)
            fetch(`${connections.get_event_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setEvent(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [state])

    if (!state) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div>
            booking page
            {!event &&
            <div>
                <Loading/>
            </div>}

            {event &&
                <div className={css.flex_container}>
                    <div className={css.left}>

                    </div>
                    <div className={css.right}>
                        sdfsdfsd


                        <NavLink
                            className={`${css.nav}`}

                            to={`/events/${slugify(event.eventTitle, { lower: true })}/booking/checkout`}
                            state={
                                {
                                    id: `${event.eventId}`,
                                    ev: event
                                }
                            }
                        >
                            <button className={css.button}>Confirm</button>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    );
};

export {Booking};