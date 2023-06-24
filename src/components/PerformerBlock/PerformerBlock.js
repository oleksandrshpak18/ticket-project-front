import React from 'react';
import css from "../PerformerBlock/PerformerBlock.module.css";

const PerformerBlock = ({performer}) => {
    const defaultImage = 'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1'

    return (
        <div  className={`${css.container}`}>
            <img src={
                (performer.img != null) ? performer.img : defaultImage
            } alt={`${performer.title}`} className={css.img}/>
            <div className={`${css.imageText}`}>{performer.title}</div>
        </div>
    );
};

export default PerformerBlock;