import React, {useEffect, useState} from 'react';
import css from "./PerformersPage.module.css";

import {connections} from "../../data";
import PerformerBlock from "../../components/PerformerBlock/PerformerBlock";
import {SinglePerformer} from "../../components/SinglePerformer/SinglePerformer";

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

    const [singleOne, setSingleOne] = useState(null)

    const f = () => {
        setSingleOne(null)
    }

    return (
        <div>
            {singleOne && <div className={`${css.resetter}`} onClick={f}>back to all performers</div>}
            {
                !singleOne &&
                <div>
                    <div>placeholder for search / filter
                    </div>

                    <div className={`${css.PerformerBlock}`}>
                        {
                            performers.map((elem)=>(
                                <PerformerBlock performer={elem} singleSetter={setSingleOne}/>
                            ))
                        }
                    </div>
                </div>
            }
            <div>
                {singleOne && <SinglePerformer performer={singleOne}/> }
            </div>
        </div>

    );
};

export default PerformersPage;