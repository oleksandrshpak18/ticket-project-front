import React from 'react';

import css from "../EventBlock/EventBlock.module.css";

const EventBlock = ({ev}) => {
    const date = new Date(ev.eventDate);
    return (
        <div className={`${css.eventBlock}`}>
            <img src={ev.image} alt={`${ev.eventTitle}`}/>
            <h2 >{ev.eventTitle}</h2>
            <p>{ev.venue.venueName}</p>
            <p>
                {
                    date.toLocaleString('default',
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })
                }
            </p>
        </div>
    );
};

export default EventBlock;

