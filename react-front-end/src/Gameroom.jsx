import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Game from "./Game.jsx";


const themeStyle = {
  width: '100%',
  height: '120px',
};


class Gameroom extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    // - Some for loop will be required later when there are more than 1 Room
    // - Need to figure out how to arrange 3 rooms by row
    
    render() {
      return (
        
          <div className="card mb-4 shadow-lg">
            <div className="card-header">
              <span><h4 className="my-0 font-weight-normal">Room 1</h4></span>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">3 <small className="text-muted">/ 3</small></h1>
              <button className="btn btn-lg btn-block btn-outline-dark mt-3 mb-4" style={themeStyle}>
                <Link to="/lobby/1"><h1>Theme</h1></Link>
              </button>
              <div className="btn btn-lg btn-block btn-outline-dark bg-outline-dark">Playing...</div>
            </div>
          </div>
      
      );
    }
  }
  
  export default Gameroom;

  