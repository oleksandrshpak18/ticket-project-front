import React, {useEffect, useState} from 'react';
import css from "../../components/Layout/Layout.module.css";
import EventLine from "../../components/EventLine/EventLine";
import {connections} from "../../data";

const SinglePerformer = ({performer}) => {
    const [events, setEvents] = useState([])

    useEffect(()=> {
        // request data
        // fetch(connections.get_all_performers) !!!// change connection string
        //     .then(response => response.json())
        //     .then((json) => {
        //         console.log(json)
        //         setEvents(json)
        //     })
        console.log('request an events of a performer; must be done later')
        // set data
    }, [performer])

    return (
        <div>
            <img src={performer.img} alt={`${performer.title}`}/>
            <h2>{performer.title}</h2>
            <div>
                {
                    performer.performerGenres.map((elem) => (
                        <span>{elem}</span>
                    ))
                }
            </div>
            <div>{performer.performerType}</div>
            <p>{performer.description}</p>
            {performer.careerBeginYear != null && <p>Початок кар'єри: {performer.careerBeginYear}</p>}

            <div> {/*this is a container to fill it with data about performer's events*/}
                <h2>Перелік подій</h2>
                <div className={`${css.eventLine}`}>
                    {
                        events.map((elem) => (
                            <EventLine ev={elem}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export {SinglePerformer};