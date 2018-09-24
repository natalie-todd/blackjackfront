import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { fromJS, Map } from 'immutable';
// import { newDeck, deal } from './Library/Cards';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './Reducer';
import { setupGame, setRecord } from './Action_creators';

let store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

store.dispatch(setupGame());
store.dispatch(setRecord(0, 0));

ReactDOM.render(
<Provider store={store}>
    <AppContainer />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
