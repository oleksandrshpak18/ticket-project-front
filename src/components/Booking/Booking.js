import React, {useEffect, useState} from 'react';
import slugify from "slugify";

import {Navigate, NavLink, useLocation} from "react-router-dom";
import {Loading} from "../Loading/Loading";
import {connections} from "../../data";
import css from './Booking.module.css'
import {logDOM} from "@testing-library/react";

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

    useEffect(()=> {
        if (event) {
            console.log(event);
        }
    }, [event])

    if (!state) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div>
            {!event &&
            <div>
                <Loading/>
            </div>}

            {event &&
                <div className={css.flex_container}>
                    <div className={css.left}> {/* a good idea will be to make it zoomable like at concert.ua*/}
                        <div className={`${css.stage}`}>
                            Stage
                        </div>

                        <div className={`${css.fan}`}>
                            Fan
                        </div>

                        <div className={`${css.flex_container} ${css.zones_container}`}>
                            {
                                event.venue.venueZones.map((elem, index) => (
                                    <div key={index}>
                                        <h3>{elem.seatType}</h3> {/*to be removed later*/}
                                        <div >
                                            {Array.from({ length: elem.rowsCount }).map((_, rowIndex) => (
                                                <div key={rowIndex} className={css.row} className={`${css.flex_container} ${css.flex_row}`}>
                                                    <h4>row: {rowIndex + 1}</h4>
                                                    {Array.from({ length: elem.seatsPerRowCount }).map((_, seatIndex) => (
                                                        <div key={seatIndex} className={css.seat}>{seatIndex + 1}</div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
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