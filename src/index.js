import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { fromJS, Map } from 'immutable';
// import { newDeck, deal } from './Library/Cards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './Reducer';
import { setupGame, setRecord } from './Action_creators';

let store = createStore(reducer);

store.dispatch(setupGame());
store.dispatch(setRecord(0, 0));

// // const deck = newDeck();
// // console.log(deck);

// // ...

// let deck = newDeck();
// let playerHand, dealerHand;

// [deck, playerHand] = deal(deck, 2);
// [deck, dealerHand] = deal(deck, 1);

// dealerHand = dealerHand.push(new Map());

// const state = fromJS({
//     deck,
//     playerHand,
//     dealerHand,
//     "winCount": 0,
//     "lossCount": 0,
//     hasStood: false
// });

// console.log(state);

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

ReactDOM.render(<Provider store={store}>
    <App state={store.getState()} />
</Provider>, document.getElementById('root'));
registerServiceWorker();
