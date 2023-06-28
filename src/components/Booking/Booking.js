import React, {useEffect, useState} from 'react';
import slugify from "slugify";

import {Navigate, NavLink, useLocation} from "react-router-dom";
import {Loading} from "../Loading/Loading";
import {connections} from "../../data";
import css from './Booking.module.css'
import {OneTicket} from "../OneTicket/OneTicket";

const Booking = () => {
    const state = useLocation().state

    const [event, setEvent] = useState(null)
    const [chosenSeats, setChosenSeats] = useState(new Array())
    const [countedPrice, setCountedPrice] = useState(0)
    const [soldTickets, setSoldTickets] = useState(new Array())

    useEffect(() => {
        if (state != null) {
            // request data
            // console.log(`id: ${state.id}`)
            fetch(`${connections.get_event_by_id}${state.id}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setEvent(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [state])

    useEffect(()=> {
        if (event) {
            console.log(event);
            fetch(`${connections.get_sold_tickets_by_event_id}${event.eventId}`)
                .then(response => response.json())
                .then((json) => {
                    // console.log(json)
                    setSoldTickets(json) // set data
                })
                .catch((err) => {
                    console.warn(err.message);
                })
        }
    }, [event])

    useEffect(()=>{
        console.log(soldTickets)
    }, [soldTickets])

    useEffect(() => {
        const res = chosenSeats
            .map((x) => parseInt(x.ticketPrice))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setCountedPrice(res);

        const seatClass = `${css.seat}`;
        const chosenClass = `${css.chosen}`;
        const seats = document.getElementsByClassName(seatClass);
        const seatsArray = Array.from(seats); // Convert HTMLCollection to an array

        for (const seat of seatsArray) {
            const isChosen = isThisSeatChosen(
                seat.getAttribute('data-seat-type'),
                parseInt(seat.getAttribute('data-row-number')),
                parseInt(seat.getAttribute('data-seat-number'))
            );
            if (isChosen) {
                seat.classList.add(chosenClass);
            } else {
                seat.classList.remove(chosenClass)
            }
        }
    }, [chosenSeats]);


    const onSeatClick = (e) => {
        if (chosenSeats.length === 10){
            alert('Only 10 tickets per order are allowed')
        } else {
            const seatType = e.target.getAttribute('data-seat-type')
            const rowNumber = e.target.getAttribute('data-row-number')
            const seatNumber = e.target.getAttribute('data-seat-number')
            const price = e.target.getAttribute('data-price')
            const classes = e.target.classList
            console.log(classes)
            const chosenSeat = {
                seatType: seatType,
                rowNumber: parseInt(rowNumber),
                seatNumber: parseInt(seatNumber),
                ticketPrice: parseInt(price),
                venueId: event.venue.venueId,
                eventId: event.eventId
            }

            fetch(`${connections.post_is_ticket_available}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chosenSeat),
            })

                .then((json) => {
                    // Handle the response data
                    if(json.ok) {
                        console.log(json);
                        setChosenSeats([...chosenSeats, chosenSeat])
                    } else {
                        alert('The ticket is unavailable now. Reload the page and try again, please.')
                    }
                })
                .catch((err) => {
                    // Handle any errors
                    console.warn(err.message);
                })
        }
    }

    const removeFromChosenSeatsByIndex = (index) => {
        const updatedArray = chosenSeats.filter((_, i) => i !== index);
        setChosenSeats(updatedArray);
    }

    const isThisSeatChosen = (type, row, col) => {
        return chosenSeats.some((x) => x.seatType === type && x.rowNumber === row && x.seatNumber === col)
    }

    if (!state) {
        return (<Navigate to="/" replace/>);
    }

    return (
        <div>
            {!event &&
            <div>
                <Loading/>
            </div>}

            {event &&
                <div className={css.flex_container}>
                    <div className={css.left}> {/* a good idea will be to make it zoomable like at concert.ua*/}
                        <div className={`${css.stage}`}>
                            Stage
                        </div>

                        { (event.venue.venueZones.map((x) => x.seatType).includes('VIP-fan')) &&
                            <div
                                className={`${css.vip_fan} ${css.VIP_fan}`}
                                data-seat-type={`VIP-fan`}
                                data-row-number={1}
                                data-seat-number={1}
                                data-price={event.ticketPrices.find(x => x.seatType === 'VIP-fan')?.price}
                                onClick={onSeatClick}
                            >
                                Vip-fan
                            </div>
                        }

                        { (event.venue.venueZones.map((x) => x.seatType).includes('Fan-zone')) &&
                            <div
                                className={`${css.fan} ${css.Fan_zone}`}
                                data-seat-type={`Fan-zone`}
                                data-row-number={1}
                                data-seat-number={1}
                                data-price={event.ticketPrices.find(x => x.seatType === 'Fan-zone')?.price}
                                onClick={onSeatClick}
                            >
                                Fan
                            </div>
                        }

                        <div className={`${css.flex_container} ${css.zones_container}`}>
                            {
                                event.venue.venueZones.map((elem, index) => (
                                    (elem.seatType !== 'Fan-zone' && elem.seatType !== 'VIP-fan') &&
                                        <div key={index}>
                                            {/*<h3>{elem.seatType}</h3> /!*to be removed later*!/*/}
                                            <div >
                                                {Array.from({ length: elem.rowsCount }).map((_, rowIndex) => (
                                                    <div key={rowIndex} className={`${css.row} ${css.flex_container} ${css.flex_row}`}>
                                                        {/*<h4>row: {rowIndex + 1}</h4>*/}
                                                        {Array.from({ length: elem.seatsPerRowCount }).map((_, seatIndex) => (
                                                            <div
                                                                key={seatIndex}
                                                                className={`${css.seat} ${css[elem.seatType.replace(/[^a-zA-Z0-9]/g, '_')]} ${soldTickets.some((x) => x.seatType === elem.seatType && x.rowNumber === rowIndex + 1 && x.seatNumber === seatIndex + 1) ? css.unavailable_seat : ''}`}
                                                                data-seat-type={elem.seatType}
                                                                data-row-number={rowIndex + 1}
                                                                data-seat-number={seatIndex + 1}
                                                                data-price={event.ticketPrices.find(x => x.seatType === elem.seatType)?.price}
                                                                onClick={onSeatClick}
                                                                title={`${elem.seatType}\nRow:${rowIndex + 1}\nSeat: ${seatIndex + 1}\nPrice: ${event.ticketPrices.find(x => x.seatType === elem.seatType)?.price} ₴`}
                                                            >
                                                                {/*{seatIndex + 1}*/}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={css.right}>
                        <div className={`${css.chosenTicketsBlock} ${(chosenSeats.length !== 0) ? css.block : ''}`}>
                            {
                                chosenSeats.length === 0 &&
                                <div>
                                    You haven't chosen any seat yet
                                </div>
                            }
                            {
                                chosenSeats.length !== 0 &&
                                <div>
                                    {
                                        chosenSeats.map((elem, index) => (
                                            <OneTicket key={index} elem={elem} deletingFunction={removeFromChosenSeatsByIndex} index={index}/>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                        <div className={`${css.price_container}`}>
                            <div className={css.textToLeft}>
                                <div >Tickets: </div>
                                <div >Service fee:</div>
                                <div >Total price:</div>

                            </div>
                            <div className={css.textToRight}>
                                <div >{countedPrice} ₴</div>
                                <div >{countedPrice * 0.05} ₴</div>
                                <div >{countedPrice * 1.05} ₴</div>
                            </div>
                        </div>
                        <div className={css.navContainer}>
                            <NavLink
                                className={`${css.nav}`}

                                to={`/events/${slugify(event.eventTitle, { lower: true })}/booking/checkout`}
                                state={
                                    {
                                        id: `${event.eventId}`,
                                        ev: event,
                                        chosenSeats: chosenSeats
                                    }
                                }
                            >
                                <button disabled={chosenSeats.length===0} className={css.button}>Confirm</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export {Booking};