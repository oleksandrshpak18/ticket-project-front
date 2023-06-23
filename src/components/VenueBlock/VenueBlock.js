
import React from 'react';
import css from "../VenueBlock/VenueBlock.module.css";

const VenueBlock = ({ venue }) => {
    return (
        <div className={`${css.container}`}>
            <div className={`${css.imageContainer}`}>
                <img src={venue.img} alt={venue.venueName} />
                    <div className={`${css.VenuePos}`}>{venue.venueName}</div>
                    <div className={`${css.AddressPos}`}>{venue.city}</div>
            </div>
        </div>
    );
};
export default VenueBlock;
