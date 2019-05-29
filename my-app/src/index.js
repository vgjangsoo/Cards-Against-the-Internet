import React from 'react';
import ReactDOM from 'react-dom';
import actioncable from "actioncable";
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import App from './App';
import { API_WS_ROOT } from './constants';

const cable = actioncable.createConsumer(API_WS_ROOT);

ReactDOM.render(
  <ActionCableProvider cable={cable}>
    <App cable={cable}/>
  </ActionCableProvider>,
  document.getElementById('root')
);
