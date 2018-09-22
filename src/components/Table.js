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
                {console.log('table is here')}
            </div>
        )
    }
}
export default Table;

//    <Hand
//                     test={this.state.values}
//                     suit={this.state.suits}
//                 />
//                 <Interface />
//                 <Hand test={this.state.values[4]}
//                     suit={this.state.suits}
//                 />
