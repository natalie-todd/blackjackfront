import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suits: ['clubs', 'diamonds', 'hearts', 'spades'],
            values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
            showCards: false
        }
    }

    // card = (suits, values) => {
    //     this.suits = suits;
    //     this.values = values;
    //     console.log(suits, values)
    // };

    // createDeck = () => {
    //     let cards = [];
    //     this.suits.forEach(function (values) {
    //         this.values.forEach(function (type) {
    //             cards.push(new card(type, values))
    //         })
    //     })
    // }
    // getRandomInt = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    shuffleSuits = () => {
        { console.log(this.state.suits) }
        const oldSuits = this.state.suits;
        console.log(oldSuits);
        let newSuits = [];
        let i = 0, j = 0, temp = null;
        for (i = 0; i < oldSuits; i++) {
            j = Math.floor(Math.random() * (i + 1))
            oldSuits[i] = oldSuits[j]
            newSuits.push(j);
            console.log(newSuits);
        }
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
