import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suits: ['♣', '♦', '♥', '♠'],
            values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
            colors: [
                { '♣': 'black', '♦': 'red', '♥': 'red', '♠': 'black' }
            ]
        }
    }
    render() {
        return (
            <div>
                {console.log('table is here')}
                <Hand test={this.state.values[2]} />
                <Interface />
                <Hand test={this.state.values[4]}/>
            </div>
        )
    }
}
export default Table;
