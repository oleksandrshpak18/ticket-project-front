import React, {useState} from 'react';
import css from './NotFoundPage.module.css'
import {NavLink} from "react-router-dom";
import PerformerBlock from "../../components/PerformerBlock/PerformerBlock";
import {connections} from "../../data";


const NotFoundPage = () => {
    const [performers, setPerformers] = useState([])

    const get = () => {
        // request data
        fetch(connections.get_all_performers)
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setPerformers(json)
            })

        // set data
    }

    return (
        <div>
            <button onClick={get}>get performers</button>
            <h2>Ooops... Something wrong happened.</h2>
            <p>The page you are looking for doesn't exist</p>
            <NavLink to={'/'}>
                <div className={`}`}>Головна сторінка</div>
            </NavLink>

            <h1>PerformerBlock</h1>
            <div className={`${css.PerformerBlock}`}>
            {
                performers.map((elem)=>(
                <PerformerBlock performer={elem}/>
                ))
            }
            </div>
        </div>
    );
};

export {NotFoundPage};