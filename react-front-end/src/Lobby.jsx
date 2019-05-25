import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";

class Lobby extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    render() {
      return (
        <div className="App">
          <h1>Lobby</h1>
          <div>
            <button>Create Room</button>
          </div>
          <div>
            <h1>Rooms</h1>
            <div>
              <Gameroom />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Lobby;