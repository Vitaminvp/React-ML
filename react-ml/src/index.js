import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

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