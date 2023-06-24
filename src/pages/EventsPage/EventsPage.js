import React, {useEffect, useState} from 'react';
import css from "../../components/Layout/Layout.module.css";
import EventBlock from "../../components/EventBlock/EventBlock";
import {connections} from "../../data";

const EventsPage = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        if(events.length === 0){
            // request data
            try {
                fetch(connections.get_all_events)
                    .then(response => response.json())
                    .then((json) => {
                        console.log(json)
                        setEvents(json)
                    })

            } catch (e){
                console.log(e)
            }
        }

    }, [events])
    return (
        <div>
            <div>placeholder for search / filter</div>
            <div className={`${css.eventBlock}`}>
                {
                    events.map((elem)=>(
                        <EventBlock ev={elem} key={elem.eventId}/>
                    ))
                }
            </div>
        </div>
    );
};

export default EventsPage;