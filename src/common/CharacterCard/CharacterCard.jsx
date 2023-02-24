
import React from 'react';
import './CharacterCard.css';

export const CharacterCard = ({person}) => {

    return (
        <div className="characterCardDesign">
            <div>{person.name}</div>
            <div><img className="avatar" src={person.image} alt={person.name}/></div>
            <div>{person.species}</div>
            <div>{person.status}</div>
        </div>
    )
}