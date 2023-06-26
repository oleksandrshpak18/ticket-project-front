import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from 'react-router-dom';

import css from './Header.module.css';
import slugify from "slugify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faMapPin} from "@fortawesome/free-solid-svg-icons";
import {connections} from "../../data";

const Header = () => {
    const state = useLocation().state;
    const [event, setEvent] = useState(null);

    useEffect(()=>{
        if(state) {
            if(state.ev) {
                setEvent(state.ev);
            } else {
                setEvent(null);
            }
        } else {
            setEvent(null);
        }
    }, [state]);

    return (
        <div>
            { !event &&
                <div className={`${css.header}`}>
                    <NavLink to={'/'}>
                        <div className={`${css.f60}`}>TICKETS.UA</div>
                    </NavLink>
                    <NavLink to={'/'}>
                        <div className={`${css.f40}`}>Events</div>
                    </NavLink>
                    <NavLink to={'performers'}>
                        <div className={`${css.f40}`}>Performers</div>
                    </NavLink>
                    <NavLink to={'/venues'}>
                        <div className={`${css.f40}`}>Venues</div>
                    </NavLink>
                </div>
            }

            { event &&
                <div className={`${css.header}`}>
                    <NavLink to={'/'}>
                        <div className={`${css.f60}`}>TICKETS.UA</div>
                    </NavLink>

                    <div className={`${css.f40}`}>{event.eventTitle}</div>

                    <div className={`${css.f40}`}>
                        <FontAwesomeIcon icon={faCalendarDays} className={css.icon}/>
                        {
                            new Date(event.eventDate)
                                .toLocaleString('default', {year: "numeric", month: "long", day: "numeric"})
                        }
                    </div>

                    <NavLink
                        className={`${css.nav}`}
                        to={{
                            pathname: `/venues/${slugify(event.venue.venueName, {lower: true})}`,
                        }}
                        state={{id: `${event.venue.venueId}`}}
                    >
                        <div className={`${css.fVenue}`}>
                        <FontAwesomeIcon icon={faMapPin} className={css.icon}/>
                        {event.venue.venueName}
                        </div>
                    </NavLink>
                </div>

            }
        </div>
    );
};

export {Header};
