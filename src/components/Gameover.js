import React from 'react';
import { Alert, Button } from 'reactstrap';

export class Gameover extends React.Component {
    render() {
        let message;

        if (this.props.win === undefined) {
            message = "Tie game.";
        } else if (this.props.win === true) {
            message = "You win!";
        } else {
            message = "You lose :(";
        }

        return (
            <div id="Gameover">
                <Alert color="dark">
                    {message}
                </Alert>
                <Button color="primary" onClick={this.props.nextGame}>Next Game</Button>
            </div>
        );
    }
}