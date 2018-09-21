import React from 'react';
import Outcome from './Outcome';
import { Alert, Row, Col, Button } from 'reactstrap';

const inter = () => {
    return (
        <div>
            {console.log('interface is here')}
            <Outcome />
            <div>
                <Row>
                    <Col sx='6'>
                        <Alert color='dark'>Dealer Score : </Alert></Col>
                    <Col sx='6'>
                        <Alert color='dark'>Player Score : </Alert></Col>
                </Row>
            </div>
            <Button color='success'>Deal</Button>
            <Button color='danger'>Hit</Button>
            <Button color='primary'>Stand</Button>
        </div>
    )
}

export default inter;