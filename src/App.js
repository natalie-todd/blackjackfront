import React, { Component } from 'react';
// import Interface from './components/Interface';
import Hand from './components/Hand';
import { Gameover } from './components/Gameover';
import { InterfaceContainer } from './components/Interface';
import './App.css';
import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    let messageComponent;
    if (this.props.gameOver) {
      messageComponent = <Gameover win={this.props.playerWon} />;
    }
    return (
      <div className="App">
        <h1>React Blackjack</h1>
        <InterfaceContainer />
        {messageComponent}
        <h1>Player's hand:</h1>
        <Hand cards={this.props.playerHand} />
        <h1>Dealer's hand:</h1>
        <Hand cards={this.props.dealerHand} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerHand: state.get('playerHand'),
    dealerHand: state.get('dealerHand')
  };
}

export const AppContainer = connect(mapStateToProps)(App);
