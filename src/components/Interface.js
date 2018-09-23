//This is the "Info" component

import React from 'react';
import Outcome from './Outcome';
import { Alert, Row, Col, Button } from 'reactstrap';

const inter = (props) => {
    return (
        <div className='interface'>
            {console.log('interface is here')}
            <Outcome />
            <div>
                <p>This is the info component</p>
            </div>
        </div>
    )
}

export default inter;