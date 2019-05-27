import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";

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
          <LobbyNav />

          <div class="container">
            <div class="card-deck mb-3 text-center"> 
              <Gameroom />
              <Gameroom />
              <Gameroom />
            </div>
          </div>
          
        </div>

      );
    }
  }
  
  export default Lobby;

  