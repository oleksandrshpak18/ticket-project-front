import React, {useEffect, useState} from 'react';

import css from './SingleEvent.module.css'
import {Navigate, NavLink, useLocation} from "react-router-dom";
import {connections} from "../../data";
import {Loading} from "../Loading/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faMapPin, faTag} from "@fortawesome/free-solid-svg-icons";
import slugify from "slugify";


const SingleEvent = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)

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

    useEffect(() => {
        if (event != null) {
            const prices = Object.values(event.ticketPrices.map((x) => x.price));
            setMinPrice(Math.min(...prices));
            setMaxPrice(Math.max(...prices))
        }
    }, [event])

    if (!state) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div>
            {!event && <div>
                <Loading/>
            </div>}

            {event && <div>
                <div className={`${css.eventDisplay}`}>
                    <img src={event.img} alt={event.eventTitle} className={`${css.imageContainer}`}/>
                    <div>
                        <h1>{event.eventTitle}</h1>
                        <div className={`${css.eventType}`}>
                            <span className={`${css.word}`}>{event.eventType}</span>
                        </div>
                        <div className={`${css.container}`} >
                                <div >
                                    <div className={`${css.eventDescription}`}>
                                        <h3>About event</h3>
                                        <p>{(event.eventDescription === null) ? 'no description yet' : event.eventDescription}</p>
                                    </div>
                                </div>

                            <div className={css.right}>
                                <div>
                                    <p>
                                        <FontAwesomeIcon icon={faCalendarDays} className={css.icon}/>
                                        {new Date(event.eventDate).toLocaleString('default', {
                                            year: "numeric", month: "long", day: "numeric"
                                        })}
                                    </p>
                                    <p>
                                        <NavLink
                                            className={`${css.nav}`}
                                            to={{
                                                pathname: `/venues/${slugify(event.venue.venueName, {lower: true})}`,
                                            }}
                                            state={{id: `${event.venue.venueId}`}}
                                        >
                                            <FontAwesomeIcon icon={faMapPin} className={css.icon}/>
                                            {event.venue.venueName}
                                        </NavLink>
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faTag} rotation={90} className={css.icon}/>
                                        {minPrice !== maxPrice && <span>{minPrice} - {maxPrice} ₴</span>}
                                        {minPrice === maxPrice && <span>{minPrice} ₴</span>}
                                    </p>
                                    <NavLink
                                        className={`${css.nav}`}
                                        key={event.eventId}
                                        to={`/events/${slugify(event.eventTitle, {lower: true})}/booking`}
                                        state={
                                            {
                                                id: `${event.eventId}`,
                                                ev: event
                                            }
                                        }
                                    >
                                        <button className={css.button}>Buy a ticket</button>
                                    </NavLink>
                                </div>
                               </div>
                        </div>
                </div>
                </div>
            </div>}
        </div>);
};

export default SingleEvent;