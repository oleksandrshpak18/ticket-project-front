 import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';

import css from './Layout.module.css';
 import {useState} from "react";
 import EventBlock from "../EventBlock/EventBlock";

const Layout = () => {
    const [events, setEvents] = useState([])
    // method that squires events as an array from backend
    return (
        <div>
            <Header/>
            <div className={`${css.mTop}`}></div>
            <Outlet className={`${css.outlet}`}/>
            {/*// add a flex container  to display them correctly*/}
            {
                events.map((elem)=>{
                    <EventBlock ev={elem}/>
                })
            }
        </div>
    );
};

export {Layout};
