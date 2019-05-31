import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import actioncable from "actioncable";

const cable = actioncable.createConsumer(API_WS_ROOT);

ReactDOM.render(
    <App cable={cable}/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
