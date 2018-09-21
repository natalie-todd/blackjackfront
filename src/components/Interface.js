import React from 'react';
import Outcome from './Outcome';

const inter = () => {
    return (
        <div>
            {console.log('interface is here')}
            <Outcome />
            <div>
                <a>Dealer Score : </a>
                <a>Player Score : </a>
            </div>
            <button >Deal</button>
            <button>Hit</button>
            <button >Stand</button>
        </div>
    )
}

export default inter;