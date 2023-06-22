import React from 'react';
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
        <div>
            <img src={performer.image} alt="performer"/>
            <h3>{performer.title}</h3>
        </div>
    );
};

export default PerformerBlock;