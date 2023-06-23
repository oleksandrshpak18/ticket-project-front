import React, {useEffect, useState} from 'react';
import VenueBlock from "../../components/VenueBlock/VenueBlock";
import {connections} from "../../data";

import css from './VenuesPage.module.css'

const VenuesPage = () => {
    const [venues, setVenues] = useState([])

    useEffect(() => {
        if(venues.length === 0){
            // request data
            try {
                fetch(connections.get_all_venues)
                    .then(response => response.json())
                    .then((json) => {
                        console.log(json)
                        setVenues(json)
                    })

            } catch (e){
                console.log(e)
            }
        }

    }, [venues])

    return (
        <div>
            <div>placeholder for search / filter</div>
            <div className={`${css.venuesBlockContainer}`}>
                {
                    venues.map((elem)=>(
                        <VenueBlock venue={elem}/>
                    ))
                }
            </div>
        </div>
    );
};

export default VenuesPage;