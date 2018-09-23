import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { newDeck } from './Library/Cards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const deck = newDeck();
// console.log(deck);

// ...

let deck = newDeck();
console.log("start deck:");
console.log(deck);

let playerHand = deck.takeLast(2);
deck = deck.skipLast(2);
let dealerHand = deck.takeLast(2);
deck = deck.skipLast(2);

console.log("end deck:");
console.log(deck);
console.log("playerHand:");
console.log(playerHand);
console.log("dealerHand:");
console.log(dealerHand);

// ...

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
