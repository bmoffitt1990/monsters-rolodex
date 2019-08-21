import React from 'react';

import './card.styles.css'

export const Card = props => {
    const {
        name, 
        email
    } = props.monster;
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )


}

