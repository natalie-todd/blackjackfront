import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { fromJS } from 'immutable';

import { newDeck, deal } from './Library/Cards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const deck = newDeck();
// console.log(deck);

// ...

let deck = newDeck();
let playerHand, dealerHand;

[deck, playerHand] = deal(deck, 2);
[deck, dealerHand] = deal(deck, 2);

const state = fromJS({
    deck,
    playerHand,
    dealerHand,
    "winCount": 0,
    "lossCount": 0,
    hasStood: false
});

console.log(state);

// ...
// console.log("start deck:");
// console.log(deck);
// console.log("end deck:");
// console.log(deck);
// console.log("playerHand:");
// console.log(playerHand);
// console.log("dealerHand:");
// console.log(dealerHand);

// // ...

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
registerServiceWorker();
