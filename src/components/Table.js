import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suits: ['♣', '♦', '♥', '♠'],
            values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
            // colors: [
            //     { id: 1, clubs: 'black', diamonds: 'red', hearts: 'red', spades: 'black' }
            // ]
            showCards: false
        }
    }

    dealCards = () => {
        const doesShow = this.state.showCards;
        this.setState({ showCards: !doesShow })
    }

    suitOrder = this.state.suits;

    shuffleSuits = (suits) => {
        let change = suits.length, something, index;
        while (change > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * change);
            // Decrease change by 1
            change--;
            // And swap the last element with it
            temp = suits[change];
            suits[change] = suits[index];
            suits[index] = temp;
        }
        return suits;
    }

    render() {
        let cards = null;
        if (this.state.showCards) {
            cards = <Hand
                test={this.state.values}
                suit={this.state.suits}
            />
        }
        return (
            <div>
                {cards}
                <Interface
                    test={this.state.values}
                    suit={this.state.suits}
                    clicked={this.dealCards} />
                {cards}
                {console.log('table is here')}
            </div>
        )
    }
}
export default Table;
