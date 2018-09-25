import React from 'react';
import { connect } from 'react-redux';
import { setupGame } from '../Action_creators';
import { Alert, Button } from 'reactstrap';

export class Gameover extends React.Component {
    render() {
        let alert;

        if (this.props.win === undefined) {
            alert = <Alert color="success">
                Tie game.
            </Alert>
        } else if (this.props.win === true) {
            alert = <Alert color="success">
                You win!
        </Alert>
        } else {
            alert = <Alert color="danger">
                Dealer wins!
        </Alert>
        }

        return (
            <div id="Gameover">
                {alert}
                <Button color="primary" onClick={this.props.nextGame}>Next Game</Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        nextGame: () => dispatch(setupGame())
    };
}

export const GameoverContainer = connect(undefined, mapDispatchToProps)(Gameover);