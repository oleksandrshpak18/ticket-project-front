import React, {useState} from 'react';
// import css from "../../components/Layout/Layout.module.css";
import EventLine from "../../components/EventLine/EventLine";
import css from "../PerformerPage/PerformerPage.module.css";

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
        <div className={`${css.performerContainer}`}>

            <div className={`${css.performerDisplay}`}>

            <img src={performer.img} alt="" className={`${css.imageContainer}`} />

            <div className={`${css.textContainer}`}>
                <h2 >{performer.title}</h2>
                <div className={`${css.Genres}`}>
                    {
                        performer.performerGenres.map((elem)=>(
                            <span className={`${css.word}`}>{elem}</span>
                        ))
                    }
                <div className={`${css.word}`}>{performer.performerType}</div>
                </div>

                <p  >{performer.description}</p>
                {performer.careerBeginYear != null &&  <p>Початок кар'єри: {performer.careerBeginYear}</p> }
            </div>
            </div>

            <div> {/*this is a container to fill it with data about performer's events*/}
                {/*<h2>List of events</h2>*/}
                <p className={`${css.name}`}>List of events</p>
                    {
                        events.map((elem)=>(
                            <EventLine ev={elem}/>
                        ))
                    }
            </div>
        </div>
    );
};

export default PerformerPage;