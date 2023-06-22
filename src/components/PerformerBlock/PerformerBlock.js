import React from 'react';
import css from "../PerformerBlock/PerformerBlock.module.css";
// public string Title { get; set; } = null!;
//
// public string? Description { get; set; }
//
// public int? CareerBeginYear { get; set; }
//
// public string? Img { get; set; }
//
// public virtual string? Country { get; set; }
// public virtual List<string> PerformerGenres { get; set; } = new List<string>();
// public virtual string? PerformerType { get; set; }
const PerformerBlock = ({performer}) => {
    return (
        <div className={`${css.container}`}>
            <img src={performer.image} alt="performer"/>
            {/*<h3>{performer.title}</h3>*/}

            <div className={`${css.imageText}`}>{performer.title}</div>
        </div>
    );
};

export default PerformerBlock;