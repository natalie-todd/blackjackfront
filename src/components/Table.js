import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
    render() {
        return (
            <div>
                {console.log('table is here')}
                <Hand />
                <Interface />
                <Hand />
                </div>
        )
    }
}
export default Table;
