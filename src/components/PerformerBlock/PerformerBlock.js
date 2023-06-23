import React from 'react';
import css from "../PerformerBlock/PerformerBlock.module.css";

const PerformerBlock = ({performer}) => {
    return (
        <div className={`${css.container}`}>
            <img src={performer.img} alt={`${performer.title}`}/>
            <div className={`${css.imageText}`}>{performer.title}</div>
        </div>
    );
};

export default PerformerBlock;