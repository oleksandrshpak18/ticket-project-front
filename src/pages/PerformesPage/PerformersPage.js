import React, {useEffect, useState} from 'react';
import css from "./PerformersPage.module.css";

import {connections} from "../../data";
import PerformerBlock from "../../components/PerformerBlock/PerformerBlock";
import {SinglePerformer} from "../../components/SinglePerformer/SinglePerformer";
import {Link, NavLink} from "react-router-dom";

import slugify from 'slugify';

const PerformersPage = () => {
    const [performers, setPerformers] = useState([])

    useEffect(() => {
        if(performers.length===0){
            // request data
            try {
                fetch(connections.get_all_performers)
                    .then(response => response.json())
                    .then((json) => {
                        console.log(json)
                        setPerformers(json)
                    })

            } catch (e){
                console.log(e)
            }
        }

    }, [performers])

    return (
        <div>
            <div>
                <div>
                    placeholder for search / filter
                </div>

                <div className={`${css.PerformerBlock}`}>
                    {
                        performers.map((elem)=>(
                            <NavLink
                                key={elem.performerId}
                                to={{
                                    pathname: `${slugify(elem.title, {lower: true})}`,
                                }}
                                state={{id: `${elem.performerId}`} }
                            >
                                <PerformerBlock performer={elem}/>
                            </NavLink>

                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default PerformersPage;