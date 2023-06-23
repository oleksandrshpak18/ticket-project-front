import React, {useState} from 'react';
import VenueBlock from "../../components/VenueBlock/VenueBlock";

const VenuesPage = () => {

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

    return (
        <div>
            <h1>Venues page</h1>
            <div>placeholder for search / filter</div>
            <div className={``}>
                {
                    venues.map((elem)=>(
                        <VenueBlock venue={elem}/>
                    ))
                }
            </div>
        </div>
    );
};

export default VenuesPage;