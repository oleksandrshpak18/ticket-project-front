import React, {useEffect, useState} from 'react';
import VenueBlock from "../../components/VenueBlock/VenueBlock";
import {connections} from "../../data";

import css from './VenuesPage.module.css'
import slugify from "slugify";
import {NavLink} from "react-router-dom";
import {Loading} from "../../components/Loading/Loading";

const VenuesPage = () => {
    const [venues, setVenues] = useState([])

    useEffect(() => {
        if(venues.length === 0){
            // request data
            try {
                fetch(connections.get_all_venues)
                    .then(response => response.json())
                    .then((json) => {
                        // console.log(json)
                        setVenues(json)
                    })

            } catch (e){
                console.log(e)
            }
        }

    }, [venues])

    return (
        <div>
            <div>
                placeholder for search / filter
            </div>

            <div>
                {
                    venues.length === 0 &&
                    <div>
                        <Loading/>
                    </div>
                }

                { venues.length !== 0 &&
                    <div className={`${css.venuesBlockContainer}`}>
                        {
                            venues.map((elem)=>(
                                <NavLink
                                    key={elem.venueId}
                                    to={{
                                        pathname: `${slugify(elem.venueName, {lower: true})}`,
                                    }}
                                    state={{id: `${elem.venueId}`} }
                                >
                                    <VenueBlock venue={elem}/>
                                </NavLink>

                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default VenuesPage;