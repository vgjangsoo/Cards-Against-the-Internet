import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Chat extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    render() {
      return (
        <div className="Chat">
          <h1>Room #1: Chat</h1>
        </div>
      );
    }
  }
  
  export default Chat;