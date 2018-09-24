import React from 'react';

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
                {message}
                <button onClick={this.props.nextGame}>Next Game</button>
            </div>
        );
    }
}