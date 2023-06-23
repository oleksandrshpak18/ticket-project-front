import React, {useEffect, useState} from 'react';
import css from "./PerformersPage.module.css";

import {connections} from "../../data";
import PerformerBlock from "../../components/PerformerBlock/PerformerBlock";
import {SinglePerformer} from "../../components/SinglePerformer/SinglePerformer";

const PerformersPage = () => {
    const [performers, setPerformers] = useState([])

    useEffect(() => {
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
        // set data
    }, [performers])

    return (
        <div>
            all performers page
            <div>
                placeholder for search/filtering on front-end
            </div>

            <h2>tmp message: the following block has to display all the performers </h2>

            <div className={`${css.PerformerBlock}`}>
                {
                    performers.map((elem)=>(
                        <PerformerBlock performer={elem}/>
                    ))
                }
            </div>
        <div> {/* to be removed*/}
            {performers.length !== 0 && <SinglePerformer performer={performers.at(0)}/> }
        </div>
        </div>

    );
};

export default PerformersPage;