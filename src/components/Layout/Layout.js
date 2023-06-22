import {NavLink, Outlet} from 'react-router-dom';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

import css from './Layout.module.css';
import React, {useState} from "react";
import EventBlock from "../EventBlock/EventBlock";
import EventLine from "../EventLine/EventLine";
import PerformerBlock from "../PerformerBlock/PerformerBlock";
import VenueBlock from "../VenueBlock/VenueBlock";

const Layout = () => {
    const [events, setEvents] = useState([
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        }
        ,
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        }
        ,
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
        {
            image: 'https://img.ticketsbox.com/cache/0x0/data/0516.png_.webp',
            title: 'Океан Ельзи',
            venue: {venue_name: 'Київ, Stereo Plaza ', city: 'Lviv'},
            date: '18/11/2002', // be careful, it is just a text, not a date
            begin_time: '16:00' // be careful, it is just a text, not a time
        },
    ])

    const [performers, setPerformers] = useState([
        {
            title: 'Lana Del Rey',
            image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/b67e6f23-5838-4e1e-be97-56afead24cc3.jpg'
        },
        {
            title: 'Lana Del Rey',
            image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/b67e6f23-5838-4e1e-be97-56afead24cc3.jpg'
        },
        {
            title: 'Lana Del Rey',
            image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/b67e6f23-5838-4e1e-be97-56afead24cc3.jpg'
        },
        {
            title: 'Lana Del Rey',
            image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/09/b67e6f23-5838-4e1e-be97-56afead24cc3.jpg'
        }
    ])

    const [venues, setVenues] = useState([
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        },
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        },
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        },
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        },
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        },
        {
            venue_name: 'venue 1',
            image: 'https://upl.ua/glide/uploads/2008/fagMbMMhzsc66iUZiTk8fs7O4C-69mSy.jpg?w=900&h=540&fit=contain&s=23b87b8f513f7f91e9ffba6f83eb43f9',
            address: 'address 1'
        }
    ])
    // method that quires events as an array from backend
    return (
        <div>
            <Header/>
            <div className={`${css.mTop}`}></div>
            <Outlet className={`${css.outlet}`}/>
            {/*// this will be later removed, of course*/}
            <NavLink to={'/performer'}>
                <div className={``}>Сторінка виконаця, яка буде відкриватися по кліку на PerformerBox</div>
            </NavLink>
            <h1>eventBlock</h1>
            <div className={`${css.eventBlock}`}>
            {
                events.map((elem)=>(
                    <EventBlock  ev={elem}/>
                ))
            }
            </div>
            <h1>eventLine</h1>
            <p className={`${css.name}`}>List of events</p>
            <div className={`${css.eventLine}`}>
            {

                events.map((elem)=>(
                    <EventLine ev={elem}/>
                ))

            }
                </div>

            <h1>PerformerBlock</h1>
            <div className={`${css.PerformerBlock}`}>
            {
                performers.map((elem)=>(
                    <PerformerBlock performer={elem}/>
                ))
            }
            </div>

            <h1>VenueBlock</h1>
            <div className={``}>
                {
                    venues.map((elem)=>(
                        <VenueBlock venue={elem}/>
                    ))
                }
            </div>
            <Footer/>
        </div>

    );
};

export {Layout};