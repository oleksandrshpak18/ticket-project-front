
import React from 'react';
import css from "../VenueBlock/VenueBlock.module.css";

const VenueBlock = ({ venue , singleSetter}) => {
    const defaultImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1'
    return (
        <div  className={`${css.container}`}>
            <div className={`${css.imageContainer}`}>
                <img src={
                    (venue.img != null) ? venue.img : defaultImage
                } alt={venue.venueName} />
                    <div className={`${css.VenuePos}`}>{venue.venueName}</div>
                    <div className={`${css.AddressPos}`}>{venue.city}</div>
            </div>
        </div>
    );
};
export default VenueBlock;
