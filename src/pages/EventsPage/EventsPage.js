import React, {useState} from 'react';
import css from "../../components/Layout/Layout.module.css";
import EventBlock from "../../components/EventBlock/EventBlock";

const EventsPage = () => {
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
    return (
        <div>
            <h1>Events page</h1>
            <div>placeholder for search / filter</div>
            <div className={`${css.eventBlock}`}>
                {
                    events.map((elem)=>(
                        <EventBlock  ev={elem}/>
                    ))
                }
            </div>
        </div>
    );
};

export default EventsPage;