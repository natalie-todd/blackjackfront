//This is the "Info" component

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

export class Interface extends React.Component {
    render() {
        return (
            <div className='interface'>
                {console.log('interface is here')}
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
};

function mapStateToProps(state) {
    return {
        winCount: state.get('winCount'),
        lossCount: state.get('lossCount'),
        hasStood: state.get('hasStood')
    };
}

export const InterfaceContainer = connect(mapStateToProps)(Interface);
