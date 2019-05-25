import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Game from "./Game.jsx";

const style = {
  border: '2px solid',
  display: 'flex-box',
  width: '300px'
};

class Gameroom extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    render() {
      return (
        <div className="Gameroom" style={style}>
          <h1>Room #1</h1>
          <div>
            <h3>Number of Players</h3>
          </div>
          <Link to="/lobby/1"><h1>Theme</h1></Link> {/* ${dataformrails.id} */}
          <h6>Game Status</h6>
        </div>
      );
    }
  }
  
  export default Gameroom;