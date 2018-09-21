import React from 'react';
import Outcome from './Outcome';
import { Alert } from 'reactstrap';

const inter = () => {
    return (
        <div>
            {console.log('interface is here')}
            <Outcome />
            <div>
                <Alert color='dark'>Dealer Score : </Alert>
                <Alert color='dark'>Player Score : </Alert>
            </div>
            <button >Deal</button>
            <button>Hit</button>
            <button >Stand</button>
        </div>
    )
}

export default inter;