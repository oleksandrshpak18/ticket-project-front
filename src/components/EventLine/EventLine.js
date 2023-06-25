import React from 'react';
import slugify from "slugify";
import {NavLink} from "react-router-dom";

import css from "../EventLine/EventLine.module.css";

const EventLine = ({ev}) => {
    const [hours, minutes, seconds] = ev.beginTime.split(":");
    const eventTime = new Date();
    eventTime.setHours(hours);
    eventTime.setMinutes(minutes)

    const prices = ev.ticketPrices.map((x) => x.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return (
        <div>
            <div className={`${css.eventLine}`}>
                <p className={`${css.dateWidth}`}>{new Date(ev.eventDate).toLocaleString('default',
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</p>
                <p className={`${css.cityWidth}`}>{ev.venue.city}</p>
                <p className={`${css.venueWidth}`}>{ev.venue.venueName}</p>
                <p  className={`${css.timeWidth}`}>
                    {
                        eventTime.toLocaleString([],
                            {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: false
                            })
                    }
                </p>
                <p className={`${css.priceWidth}`}>
                {minPrice !== maxPrice && <span>{minPrice} - {maxPrice} ₴</span>}
                {minPrice === maxPrice && <span>{minPrice} ₴</span>}
                </p>
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