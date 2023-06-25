import React, {useEffect, useState} from 'react';
import css from "./SinglePerformer.module.css";
import {EventLine} from "../../components/EventLine/EventLine";
import {connections} from "../../data";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {Loading} from "../Loading/Loading";

const SinglePerformer = () => {
    const state = useLocation().state

    const [performer, setPerformer] = useState(null)
    const [events, setEvents] = useState([])
    const [isEventsLoaded, setIsEventsLoaded] = useState(false)

    useEffect(() => {
        if (state != null) {
            // request data
            // console.log(`id: ${state.id}`)
            fetch(`${connections.get_performer_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setPerformer(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [state])

    useEffect(() => {
        if (performer != null) {
            // console.log(performer)
            // request data
            fetch(`${connections.get_events_by_performer_id}${performer.performerId}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    if (json.status !== 404) {
                        setEvents(json)
                    }
                    setIsEventsLoaded(true);
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }

    }, [performer])


    if (!state) {
        return (
            <Navigate to="/performers" replace/>
        );
    }

    return (
        <div>
            {!performer &&
                <div>
                    <Loading/>
                </div>
            }

            {performer &&
                <div className={`${css.performerContainer}`}>

                    <div className={`${css.performerDisplay}`}>
                        <img src={performer.img} alt={`${performer.title}`} className={`${css.imageContainer}`}/>

                        <div className={`${css.textContainer}`}>
                            <h2>{performer.title}</h2>
                            <div className={`${css.Genres}`}>
                                {
                                    performer.performerGenres.map((elem) => (
                                        <span className={`${css.word}`}>{elem}</span>
                                    ))
                                }
                                <div className={`${css.word}`}>{performer.performerType}</div>
                            </div>

                            <p>{performer.description}</p>
                            {/*{performer.careerBeginYear != null &&*/}
                            {/*    <p>Початок кар'єри: {performer.careerBeginYear}</p>}*/}
                        </div>
                    </div>

                    <div>
                        <p className={`${css.name}`}>List of events</p>
                        {
                            events.length === 0 && !isEventsLoaded && <div>
                                <Loading/>
                            </div>
                        }

                        {
                            events.length === 0 && isEventsLoaded && <div>
                                No events here yet. Check for updates in nearest future.
                            </div>
                        }

                        {events &&
                            events.map((elem) => (
                                <EventLine ev={elem} key={elem.eventId}/>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export {SinglePerformer};