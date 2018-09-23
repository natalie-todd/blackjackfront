//This is the "Info" component

import React from 'react';
import Outcome from './Outcome';
import { Alert, Row, Col, Button } from 'reactstrap';

export default class Interface extends React.Component {
    render() {
        return (
            <div className='interface'>
                {console.log('interface is here')}
                <Outcome />
                <div className='oInterface'>
                    <span id="player_record">
                        Wins: {this.props.winCount} Losses: {this.props.lossCount}
                    </span>
                    <span id="buttons">
                        <Button 
                        color="danger"
                        disabled={this.props.hasStood}>Hit</Button>
                        <Button 
                        color="success"
                        disabled={this.props.hasStood}>Stand</Button>
                    </span>

                </div>
            </div>
        )
    }
}
