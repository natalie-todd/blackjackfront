//This is the "Info" component

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { dealToPlayer } from '../Action_creators';

export class Interface extends React.Component {
    render() {
        return (
            <div id='interface'>
                {console.log('interface is here')}
                <div className='oInterface'>
                    <span id="player_record">
                        Wins: {this.props.winCount} Losses: {this.props.lossCount}
                    </span>
                    <span id="buttons">
                        <Button
                            color="danger"
                            disabled={this.props.hasStood}
                            onClick={this.props.onClickHit}>Hit</Button>
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
const mapDispatchToProps = (dispatch) => {
    return {
        onClickHit: () => {
            dispatch(dealToPlayer())
        }
    }
}

export const InterfaceContainer = connect(mapStateToProps, mapDispatchToProps)(Interface);
