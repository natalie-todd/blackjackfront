import React from 'react';
import Card from './Card';

export default class Hand extends React.Component {
    render() {
        return (
            <div className='hand'>
                {this.props.cards.map((card, i) =>
                    <Card suit={card.get('suit')}
                        rank={card.get('rank')}
                        key={i} />
                )}
            </div>
        )
    }
}