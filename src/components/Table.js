import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suits: ['clubs', 'diamonds', 'hearts', 'spades'],
            values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
            // colors: [
            //     { id: 1, clubs: 'black', diamonds: 'red', hearts: 'red', spades: 'black' }
            // ]
            showCards: false
        }
    }

    shuffleSuits = () => {
        let oldSuits = this.state.suits;
        let newSuits = [];
        let i = 0, j = 0, temp = null;
        for (i = oldSuits.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = oldSuits[i]
            oldSuits[i] = oldSuits[j]
            oldSuits[j] = temp
            newSuits.push(j);
        }
        console.log(newSuits)
    }

    // dealCards = () => {
    //     // shuffleSuits(this.state.suits)
    //     const doesShow = this.state.showCards;
    //     this.setState({ showCards: !doesShow })
    //     console.log(this.state.suits)
    // }

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
                    clicked={this.shuffleSuits} />
                {cards}
                {console.log('table is here')}
            </div>
        )
    }
}
export default Table;
