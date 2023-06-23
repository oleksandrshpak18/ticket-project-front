import React from 'react';
import css from "../PerformerBlock/PerformerBlock.module.css";

const PerformerBlock = ({performer, singleSetter}) => {
    const onClickFunction = () => {
        singleSetter(performer)
    }

    return (
        <div onClick={onClickFunction} className={`${css.container}`}>
            <img src={performer.img} alt={`${performer.title}`} className={css.img}/>
            <div className={`${css.imageText}`}>{performer.title}</div>
        </div>
    );
};

export default PerformerBlock;