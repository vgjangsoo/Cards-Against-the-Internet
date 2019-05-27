import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class AnswererDeck extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    render() {
      return (
        <div className="Game">
          <h3>Answerers' Cards</h3>
        </div>
      );
    }
  }
  
  export default AnswererDeck;