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
        <div className="p-2 chat-box">
          <h5>Chat</h5>
          <div className="incoming-msg">

          </div>
          <div className="d-flex flex-row justify-content-around">
            <input type="chat-input" id="cha-input" className="form-control write_msg" placeholder="Let's chat!"></input>
            <button className="btn btn-dark btn-md p-1">
              Send
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Chat;