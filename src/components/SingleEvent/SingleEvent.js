import React, {useEffect, useState} from 'react';

import css from './SingleEvent.module.css'
import {Navigate, useLocation} from "react-router-dom";
import {connections} from "../../data";
import {Loading} from "../Loading/Loading";

const SingleEvent = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)
    const [performer, setPerformer] = useState(null)
    const [venue, setVenue] = useState(null)

    useEffect(() => {
        if (state != null) {
            // request data
            // console.log(`id: ${state.id}`)
            fetch(`${connections.get_event_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setEvent(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [state])

    useEffect(() => {
        if (event != null) {
            setPerformer(event.performer);
            setVenue(event.venue);
        }
    }, [event])

    if (!state) {
        return (
            <Navigate to="/" replace/>
        );
    }

    return (
        <div className={css.container}>
            {!event &&
                <div>
                    <Loading/>
                </div>
            }

            {event &&
                <div className={css.flex_container}>
                    <div className={css.left}>
                        sdflkjsdf
                    </div>
                    <div className={css.right}>
                        sdfsdfsd
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleEvent;