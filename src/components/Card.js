import React from 'react';


const card = (props) => {
    return (
        <div>
            {console.log('card is here')}
            <p>
                This card is {props.suit}.
                </p>
        </div>
    )
}

export default card;