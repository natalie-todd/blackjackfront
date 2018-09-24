import React, { Component } from 'react';
import Interface from './components/Interface';
import Hand from './components/Hand';
import './App.css';
import { InterfaceContainer } from './components/Interface';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Blackjack</h1>
        <InterfaceContainer />
        <h1>Player's hand:</h1>
        <Hand cards={this.props.state.get('playerHand')} />
        <h1>Dealer's hand:</h1>
        <Hand cards={this.props.state.get('dealerHand')} />
      </div>
    );
  }
}

