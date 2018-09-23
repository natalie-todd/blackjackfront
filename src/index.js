import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { newDeck } from './Library/Cards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const deck = newDeck();
console.log(deck);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
