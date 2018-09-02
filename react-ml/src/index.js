import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';

import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


// console.log(store.getState());

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

store.dispatch({
    type: 'ADD_TRACK',
    payload: {
        id: '01',
        name: 'Smells like a spirit'
    }
});
store.dispatch({
    type: 'ADD_TRACK',
    payload: {
        id: '02',
        name: 'Два кольори'
    }
});