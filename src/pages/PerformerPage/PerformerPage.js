import React, {useState} from 'react';
import css from "../../components/Layout/Layout.module.css";
import EventLine from "../../components/EventLine/EventLine";

const PerformerPage = ({performer}) => {

    // this is a mock data, need to get them from back using performer id
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
    ])

    return (
        <div>
            <img src={performer.img} alt=""/>
            <h2>{performer.title}</h2>
            <div>
                {
                    performer.performerGenres.map((elem)=>(
                        <span>{elem}</span>
                    ))
                }
            </div>
            <div>{performer.performerType}</div>
            <p>{performer.description}</p>
            {performer.careerBeginYear != null &&  <p>Початок кар'єри: {performer.careerBeginYear}</p> }

            <div> {/*this is a container to fill it with data about performer's events*/}
                <h2>Перелік подій</h2>
                <div className={`${css.eventLine}`}>
                    {
                        events.map((elem)=>(
                            <EventLine ev={elem}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default PerformerPage;