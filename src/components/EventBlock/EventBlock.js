import css from './EventBlock.module.css';

import React from 'react';

const EventBlock = ({ev}) => {
    return (
        <div className={css.eventBlock}>
            // ev: image, title, venue.venue_name, date
            <img src={ev.image} alt="event-image"/>
            <h3>{ev.title}</h3>
            <p>{ev.venue.venue_name}</p>
            <p>{ev.date}</p>
        </div>
    );
};

export default EventBlock;