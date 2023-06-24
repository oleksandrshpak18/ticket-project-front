import React, {useEffect, useState} from 'react';
import css from "./SinglePerformer.module.css";
import EventLine from "../../components/EventLine/EventLine";
import {connections} from "../../data";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";

const SinglePerformer = () => {
    console.log('we are here!!')
    const state = useLocation().state
    // console.log(id)

    const [performer, setPerformer] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(()=>{
        if(state != null) {
            // request data
            console.log(`id: ${state.id}`)
            fetch(`${connections.get_performer_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    console.log(json)
                    setPerformer(json) // set data
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }, [state])

    useEffect(()=> {
        console.log(performer)
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


    if(!state) {
        return (
            <Navigate to="/performers" replace/>
        );
    }

    return (
        <div>
            {performer != null && <div>
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
                        {/*{*/}
                        {/*    events.map((elem)=>(*/}
                        {/*        <EventLine ev={elem}/>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </div>
                </div>
            </div> }
        </div>
    );
};

export {SinglePerformer};