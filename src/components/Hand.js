import React from 'react';
import Card from './Card';

const hand = (props) => {
    return (
        <div>
            {console.log('hand is here')}
            <Card />
            <p>This is {props.test}</p>
            <Card />
        </div>
    )
}

export default hand;