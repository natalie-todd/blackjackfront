import React from 'react';
import Card from './Card';

const hand = (props) => {
    return (
        <div>
            {console.log('hand is here')}
            <Card
                suit={props.suit}
                test={props.test} 
                />
            <p>This hand is {props.test}.</p>
            <Card
                suit={props.suit[2]}
                test={props.test} />
        </div>
    )
}

export default hand;