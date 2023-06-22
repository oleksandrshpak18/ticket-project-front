import React from 'react';
import css from "../PerformerBlock/PerformerBlock.module.css";


// venue: image, venue_name, address
const VenueBlock = ({venue}) => {
    return (
        <div>
            <img src={venue.image} alt="performer"/>
            <h3>{venue.address}</h3>
            <div className={``}>{venue.venue_name}</div>
        </div>
    );
};

export default VenueBlock;