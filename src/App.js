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
        <Hand />
        <Hand />
      </div>
    );
  }
}

export default App;
