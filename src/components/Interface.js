//This is the "Info" component

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { dealToPlayer, stand } from '../Action_creators';

export class Interface extends React.Component {
    render() {
        let disableButtons = false;
        if (this.props.hasStood || this.props.gameOver) {
            disableButtons = true;
        }
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
                            disabled={disableButtons}
                            onClick={this.props.onClickHit}>
                            Hit
                            </Button>
                        <Button
                            color="warning"
                            disabled={disableButtons}
                            onClick={this.props.onClickStand}>
                            Stand
                            </Button>
                    </span>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        winCount: state.get('winCount'),
        lossCount: state.get('lossCount'),
        hasStood: state.get('hasStood'),
        gameOver: state.get('gameOver')
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClickHit: () => {
            dispatch(dealToPlayer())
        },
        onClickStand: () => {
            dispatch(stand());
        }
    }
}

export const InterfaceContainer = connect(mapStateToProps, mapDispatchToProps)(Interface);
