
import React from 'react';
import css from "../VenueBlock/VenueBlock.module.css";

const VenueBlock = ({ venue }) => {
    return (
        <div className={`${css.container}`}>
            <div className={`${css.imageContainer}`}>
                <img src={venue.image} alt={venue.venue_name} />
                    <div className={`${css.VenuePos}`}>{venue.venue_name}</div>
                    <div className={`${css.AddressPos}`}>{venue.address}</div>
            </div>
        </div>
    );
};
export default VenueBlock;
