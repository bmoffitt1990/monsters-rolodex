import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component'


//this should only think about what it should add, it shouldnt think about how to create them.
//The card component will do that
export const CardList = props => {
    const {
        monsters
        } = props;
    return (
        <div className="card-list">
            {
                monsters.map(monster => <Card key={monster.id} monster={monster} />)
            }
        </div>
        )
}