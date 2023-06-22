import React from 'react';
import css from "../EventBlock/EventBlock.module.css";

const EventLine = ({ev}) => {
    return (
        <div>
            {/*ev: image, title, venue.venue_name, venue.city, date, begin_time, ? ticket_prices*/}
            <p>{ev.date}</p>
            <p>{ev.venue.city}</p>
            <p>{ev.venue.vanue_name}</p>
            <p>{ev.begin_time}</p>
            <p>prices goes here</p>
            <button>Buy now!</button>
        </div>
    );
};

export default EventLine;