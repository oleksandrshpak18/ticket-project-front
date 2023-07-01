import React, {useEffect, useState} from 'react';
import {connections} from "../../data";
import {NavLink} from "react-router-dom";
import slugify from 'slugify';
import {faPerson, faMasksTheater, faGuitar} from '@fortawesome/free-solid-svg-icons';

import css from "../../components/Layout/Layout.module.css";
import myCss from './EventsPage.module.css'
import EventBlock from "../../components/EventBlock/EventBlock";
import {Loading} from "../../components/Loading/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Select from "react-select";

const EventsPage = () => {
    const [events, setEvents] = useState([])
    const [eventTypes, setEventTypes] = useState([])
    const [genres, setGenres] = useState([])
    const [performerTypes, setPerformerTypes] = useState([])

    const [selectedEventTypes, setSelectedEventTypes] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [selectedPerformerTypes, setSelectedPerformerTypes] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        if(events.length === 0){
            try {
                fetch(connections.get_event_types)
                    .then(response => response.json())
                    .then((json) => {
                        // console.log(json)
                        setEventTypes(json)
                    })

            } catch (e){
                console.log(e)
            }

            try {
                fetch(connections.get_genres)
                    .then(response => response.json())
                    .then((json) => {
                        // console.log(json)
                        setGenres(json)
                    })

            } catch (e){
                console.log(e)
            }

            try {
                fetch(connections.get_performer_types)
                    .then(response => response.json())
                    .then((json) => {
                        // console.log(json)
                        setPerformerTypes(json)
                    })

            } catch (e){
                console.log(e)
            }



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

    useEffect(() => {
        // console.log(events);
        // console.log(selectedGenres);

        if (events.length !== 0) {
            const filteredItemsSet = new Set();

            events.forEach(item => {
                // const genreMatch = selectedGenres.length === 0 || selectedGenres.some(genre => item.performer.performerGenres.includes(genre.value));
                const genreMatch = selectedGenres.some(genre => item.performer.performerGenres.includes(genre.value));
                const eventTypeMatch = selectedEventTypes.some(type => item.eventType.includes(type.value));
                const performerTypeMatch = selectedPerformerTypes.some(type => item.performer.performerType === type.value);

                if (genreMatch || eventTypeMatch || performerTypeMatch) {
                    filteredItemsSet.add(item);
                }
            });

            const filteredItems = Array.from(filteredItemsSet);
            setFilteredEvents((filteredItems.length === 0) ? events : filteredItems)
            // setFilteredEvents(filteredItems);
        }
    }, [events, selectedEventTypes, selectedPerformerTypes, selectedGenres]);



    return (
        <div>
            <div className={`${myCss.flex}`}>
                <div className={`${myCss.flex} ${myCss.item}`}>
                    <div className={`${myCss.col}`}>
                        <div><FontAwesomeIcon className={`${myCss.icon}`} icon={faMasksTheater} size={`2xl`}/></div>

                    </div>
                    <div>
                        <Select
                            className={`${myCss.select}`}
                            isMulti
                            placeholder={'Choose an event type'}
                            value={selectedEventTypes}
                            options={eventTypes.map((x) => ({value: x.eventType, label: x.eventType}))}
                            onChange={(e)=>{
                                setSelectedEventTypes(e)
                            }
                            }
                        />
                    </div>
                </div>

                <div className={`${myCss.flex} ${myCss.item}`}>
                    <div className={`${myCss.col}`}>
                        <div><FontAwesomeIcon className={`${myCss.icon}`} icon={faPerson}  size={`2xl`}/></div>

                    </div>
                    <div>
                        <Select
                            className={`${myCss.select}`}
                            isMulti
                            is
                            placeholder={'Choose a performer type'}
                            value={selectedPerformerTypes}
                            options={performerTypes.map((x) => ({value: x.performerType, label: x.performerType}))}
                            onChange={(e)=>{
                                setSelectedPerformerTypes(e)
                            }
                            }
                        />
                    </div>
                </div>

                <div className={`${myCss.flex} ${myCss.item}`}>
                    <div className={`${myCss.col}`}>
                        <div><FontAwesomeIcon className={`${myCss.icon}`} icon={faGuitar}  size={`2xl`}/></div>

                    </div>
                    <div>
                        <Select
                            className={`${myCss.select}`}
                            isMulti
                            is
                            placeholder={'Choose a genre'}
                            value={selectedGenres}
                            options={genres.map((x) => ({value: x.genre, label: x.genre}))}
                            onChange={(e)=>{
                                setSelectedGenres(e)
                            }
                            }
                        />
                    </div>
                </div>

            </div>

            <div>
                {
                    events.length === 0 &&
                    <div>
                        <Loading/>
                    </div>
                }

                {
                    filteredEvents.length !== 0 &&
                    <div className={`${css.eventBlock}`}>
                        {
                            filteredEvents
                                .map((elem)=>(
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