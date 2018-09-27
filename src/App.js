import React, { Component } from 'react';
// import Interface from './components/Interface';
import Hand from './components/Hand';
import { GameoverContainer } from './components/Gameover';
import { InterfaceContainer } from './components/Interface';
import { HintContainer } from './components/Hint';
import './App.css';
import { connect } from 'react-redux';


export class App extends React.Component {

  render() {
    let messageComponent;
    if (this.props.gameOver) {
      messageComponent = <GameoverContainer win={this.props.playerWon} />;
    }
    return (
      <div className="App">
        <HintContainer />
        <h1 className="Blackjack">BLACKJACK</h1>
        <h3 className="dealerStands">DEALER STANDS ON 17</h3>
        <InterfaceContainer />
        {messageComponent}
        <div className='handSpace'>
          <div>
            <h2 className="handLab">Player</h2>
            <Hand cards={this.props.playerHand} />
          </div>
          <div>
            <h2 className="handLab">Dealer</h2>
            <Hand cards={this.props.dealerHand} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerHand: state.get('playerHand'),
    dealerHand: state.get('dealerHand'),
    gameOver: state.get('gameOver'),
    playerWon: state.get('playerWon')
  };
}

export const AppContainer = connect(mapStateToProps)(App);
