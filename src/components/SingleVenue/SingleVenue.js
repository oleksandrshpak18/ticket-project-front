import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, useLocation} from "react-router-dom";

import css from "./SingleVenue.module.css";
import {connections} from "../../data";
import EventBlock from "../EventBlock/EventBlock";
import {Map} from '../Map/Map'
import slugify from "slugify";

const SingleVenue = () => {
    const state = useLocation().state

    const [venue, setVenue] = useState(null)
    const [events, setEvents] = useState([])
    const [isEventsLoaded, setIsEventsLoaded] = useState(false)
    const [isBillboardDisplayed, setIsBillboardDisplayed] = useState(true)
    const [isDescriptionDisplayed, setIsDescriptionDisplayed] = useState(false)
    const [isMapDisplayed, setIsMapDisplayed] = useState(false)

    useEffect(()=>{
        if(state != null) {
            // request data
            // console.log(`id: ${state.id}`)
            fetch(`${connections.get_venue_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setVenue(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [state])

    useEffect(()=> {
        if(venue != null) {
            // console.log(performer)
            // request data
            fetch(`${connections.get_events_by_venue_id}${venue.venueId}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    if(json.status !== 404) {
                        setEvents(json)
                    }
                    setIsEventsLoaded(true);
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }

    }, [venue])

    if(!state) {
        return (
            <Navigate to="/venues" replace/>
        );
    }

    return (
        <div>
            {venue != null && <div>
                <div className={``}>

                    <div className={``}>
                        <img src={venue.img} alt={`${venue.venueName}`} className={``}/>
                        <h1>{venue.venueName}</h1>
                        <div>
                            {venue.city}, {venue.street} {venue.buildingNumber}
                        </div>
                    </div>

                    <div className={`${css.info_container}`}>
                        <div className={`${css.toggle_container}`}> {/* toggle switch between tabs*/}
                            <button
                                className={`${css.left_toggle} ${(isBillboardDisplayed) ? css.active_button : ''}`}
                                onClick={()=>{
                                    setIsBillboardDisplayed(true)
                                    setIsMapDisplayed(false);
                                    setIsDescriptionDisplayed(false);
                                }
                            }>Billboard</button>
                            <button
                                className={`${css.middle_toggle} ${(isDescriptionDisplayed) ? css.active_button : ''}`}
                                onClick={()=>{
                                    setIsDescriptionDisplayed(true)
                                    setIsBillboardDisplayed(false);
                                    setIsMapDisplayed(false);
                                }
                            }>Details</button>
                            <button
                                className={`${css.right_toggle} ${(isMapDisplayed) ? css.active_button : ''}`}
                                onClick={()=> {
                                    setIsMapDisplayed(true);
                                    setIsBillboardDisplayed(false);
                                    setIsDescriptionDisplayed(false);
                                }
                            }>Map</button>
                        </div>

                        {
                            isBillboardDisplayed && //  block for events in this venue
                            <div>
                                <h2 className={``}>List of events</h2>
                                {
                                    events.length === 0 && !isEventsLoaded && <div>
                                        Loading...
                                    </div>
                                }

                                {
                                    events.length === 0 && isEventsLoaded && <div>
                                        No events here yet. Check for updates in nearest future.
                                    </div>
                                }

                                {events &&
                                    events.map((elem)=>(
                                        <NavLink
                                            className={`${css.navLink}`}
                                            key={elem.eventId}
                                            to={{
                                                pathname: `/events/${slugify(elem.eventTitle, {lower: true})}`,
                                            }}
                                            state={{id: `${elem.eventId}`} }
                                        >
                                            <EventBlock ev={elem}/>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        }

                        {
                            isDescriptionDisplayed && // block for description
                            <div>
                                {venue.description}
                            </div>
                        }

                        {
                            isMapDisplayed && // block for map interaction
                            <div>
                                <Map address={`${venue.city}, ${venue.street} ${venue.buildingNumber}`}/>
                            </div>
                        }
                    </div>
                </div>
            </div> }
        </div>
    );
};

export default SingleVenue;