import React, { Component } from 'react';
import Interface from './components/Interface';
import Hand from './components/Hand';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>React Blackjack</h1>
        <Interface
          winCount={this.props.state.get('winCount')}
          lossCount={this.props.state.get('lossCount')}
          hasStood={this.props.state.get('hasStood')} />
        <h1>Player's hand:</h1>
        <Hand cards={this.props.state.get('playerHand')} />
        <h1>Dealer's hand:</h1>
        <Hand cards={this.props.state.get('dealerHand')} />
      </div>
    );
  }
}

export default App;
