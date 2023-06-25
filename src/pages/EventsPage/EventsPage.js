import React, {useEffect, useState} from 'react';
import {connections} from "../../data";
import {NavLink} from "react-router-dom";
import slugify from 'slugify';

import css from "../../components/Layout/Layout.module.css";
import EventBlock from "../../components/EventBlock/EventBlock";
import {Loading} from "../../components/Loading/Loading";

const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        if(events.length === 0){
            // request data
            try {
                fetch(connections.get_all_events)
                    .then(response => response.json())
                    .then((json) => {
                        // console.log(json)
                        setEvents(json)
                    })

            } catch (e){
                console.log(e)
            }
        }

    }, [events])

    return (
        <div>
            <div>
                placeholder for search / filter
            </div>

            <div>
                {
                    events.length === 0 &&
                    <div>
                        <Loading/>
                    </div>
                }

                {
                    events.length !== 0 &&
                    <div className={`${css.eventBlock}`}>
                        {
                            events.map((elem)=>(
                                <NavLink
                                    className={`${css.navLink}`}
                                    key={elem.eventId}
                                    to={{
                                        pathname: `events/${slugify(elem.eventTitle, {lower: true})}`,
                                    }}
                                    state={{id: `${elem.eventId}`} }
                                >
                                    <EventBlock ev={elem}/>
                                </NavLink>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default EventsPage;