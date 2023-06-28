import React from 'react';

import css from './OneTicket.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const OneTicket = ({elem, deletingFunction, index}) => {
    const onDeleteClicked = () => {
        deletingFunction(index)
    }

    return (
        <div className={`${css.container} ${css[elem.seatType.replace(/[^a-zA-Z0-9]/g, '_')]}`}>
            <div className={css.flex}>
                <div className={css.left}>{elem.seatType}</div>
                <div className={`${css.right} ${css.delete}`} onClick={onDeleteClicked} >
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>
            <div className={css.flex}>
                <div className={css.left}>
                    {elem.seatType !== 'Fan-zone' && elem.seatType !== 'VIP-fan' ? `Row ${elem.rowNumber}, Seat ${elem.seatNumber}` : ''}
                </div>
                <div className={css.right} >{elem.ticketPrice} ₴</div>
            </div>
        </div>
    );
};

export {OneTicket};