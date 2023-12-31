import React from 'react';

import css from "../EventBlock/EventBlock.module.css";

const EventBlock = ({ev}) => {
    const defaultImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1'
    const date = new Date(ev.eventDate);
    return (

        <div className={`${css.eventBlock}`}>

            <img src={
                (ev.img != null) ? ev.img : defaultImage
            } alt={`${ev.eventTitle}`}/>
            <h4 className={`${css.eventTitle}`} >{ev.eventTitle}</h4>
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
            <div className={`${css.overlayItems}`}>
                <button>Buy</button>
                <p >{ev.performer.title}</p>
             </div>
        </div>
    );
};

export default EventBlock;

