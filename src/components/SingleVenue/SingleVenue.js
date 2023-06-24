import React, {useEffect, useState} from 'react';
import css from "./SingleVenue.module.css";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import {Navigate, useLocation} from "react-router-dom";
import {connections} from "../../data";
import EventLine from "../EventLine/EventLine";
import EventBlock from "../EventBlock/EventBlock";

const SingleVenue = () => {
    const state = useLocation().state

    const [venue, setVenue] = useState(null)
    const [events, setEvents] = useState([])
    const [isEventsLoaded, setIsEventsLoaded] = useState(false)
    const [isBillboardDisplayed, setIsBillboardDisplayed] = useState(true)

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
                            <button className={`${css.left_toggle} ${(isBillboardDisplayed) ? css.active_button : ''}`} onClick={()=>{setIsBillboardDisplayed(true)}}>Billboard</button>
                            <button className={`${css.right_toggle} ${(!isBillboardDisplayed) ? css.active_button : ''}`} onClick={()=>{setIsBillboardDisplayed(false)}}>Map</button>
                        </div>

                        {
                            isBillboardDisplayed &&
                            <div> {/* block for events in this venue*/}
                                <p className={``}>List of events</p>
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
                                        <EventBlock ev={elem} key={elem.eventId}/>
                                    ))
                                }
                            </div>
                        }

                        <div> {/*block for map interaction*/}
                            {
                                !isBillboardDisplayed &&
                                <div>
                                    map to be displayed here...
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    );
};

export default SingleVenue;