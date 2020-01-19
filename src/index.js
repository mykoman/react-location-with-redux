import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StoreConfig from './store/StoreConfig';


import './index.css';
import App from './App';

const store = StoreConfig();

const reduxApp = (<Provider store={store}>
    <App />
</Provider>);

ReactDOM.render(reduxApp, document.getElementById('root'));