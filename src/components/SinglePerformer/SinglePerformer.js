import React, {useEffect, useState} from 'react';
import css from "./SinglePerformer.module.css";
import EventLine from "../../components/EventLine/EventLine";
import {connections} from "../../data";

const SinglePerformer = ({performer}) => {
    const [events, setEvents] = useState([])
    console.log(performer)
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

        <div className={`${css.performerContainer}`}>

            <div className={`${css.performerDisplay}`}>
                <img src={performer.img} alt={`${performer.title}`} className={`${css.imageContainer}`}/>

                <div className={`${css.textContainer}`}>
                    <h2 >{performer.title}</h2>
                    <div className={`${css.Genres}`}>
                        {
                            performer.performerGenres.map((elem)=>(
                                <span className={`${css.word}`}>{elem}</span>
                            ))
                        }
                        <div className={`${css.word}`}>{performer.performerType}</div>
                    </div>

                    <p  >{performer.description}</p>
                    {performer.careerBeginYear != null &&  <p>Початок кар'єри: {performer.careerBeginYear}</p> }
                </div>
            </div>

            <div> {/*this is a container to fill it with data about performer's events*/}
                {/*<h2>List of events</h2>*/}
                <p className={`${css.name}`}>List of events</p>
                {
                    events.map((elem)=>(
                        <EventLine ev={elem}/>
                    ))
                }
            </div>
        </div>

    );
};

export {SinglePerformer};