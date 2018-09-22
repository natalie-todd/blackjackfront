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

    shuffleSuits = (suits) => {
        let i = 0, j = 0, temp = null;
        for (i = suits.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = suits[i]
            suits[i] = suits[j]
            suits[j] = temp
        }
        this.setState({ suits: suits })
        console.log(suits);
    }
    
    dealCards = () => {
        // shuffleSuits(this.state.suits)
        const doesShow = this.state.showCards;
        this.setState({ showCards: !doesShow })
        console.log(this.state.suits)
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
