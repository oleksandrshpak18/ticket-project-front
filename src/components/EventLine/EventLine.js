import React from 'react';
import slugify from "slugify";
import {NavLink} from "react-router-dom";

import css from "../EventLine/EventLine.module.css";

const EventLine = ({ev}) => {
    const [hours, minutes, seconds] = ev.beginTime.split(":");
    const eventTime = new Date();
    eventTime.setHours(hours);
    eventTime.setMinutes(minutes)

    const prices = Object.values(ev.ticketPrices.map((x) => x.price));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return (
        <div>
            <div className={`${css.eventLine}`}>
                <p>{new Date(ev.eventDate).toLocaleString('default',
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</p>
                <p>{ev.venue.city}</p>
                <p>{ev.venue.venueName}</p>
                <p>
                    {
                        eventTime.toLocaleString([],
                            {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                            })
                    }
                </p>
                {minPrice !== maxPrice && <p>{minPrice} - {maxPrice} ₴</p>}
                {minPrice === maxPrice && <p>{minPrice} ₴</p>}
                <NavLink
                    key={ev.eventId}
                    to={{
                        pathname: `/events/${slugify(ev.eventTitle, {lower: true})}`,
                    }}
                    state={{id: `${ev.eventId}`}}
                >
                    <button>Buy now</button>
                </NavLink>
            </div>
        </div>
    );
};

export {EventLine};