import React, { Component } from 'react';
import Interface from './components/Interface';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Blackjack</h1>
        <Interface />
      </div>
    );
  }
}

export default App;
