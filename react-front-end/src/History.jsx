import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class History extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }

    render() {
      return (
        <div className="history-border">
        <h5 className="p-2">History</h5>
          <div className='d-inline-flex flex-row justify-content-around'>
            <div className='history-box history-question'>
              <h5>Q</h5>
            </div>
            <div className='history-box'>
              <h5>A</h5>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default History;
