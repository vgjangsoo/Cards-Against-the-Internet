import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const style3 = {
  marginTop: '10px',
  border: '2px solid',
  display: 'flex-box',
  padding: '20px'
};

const style4 = {
  border: '2px solid',
  display: 'flex',
  width: '100px',
  padding: '50px',
  flexDirection: 'row',
  position: 'absolute',
  right: '100px',
  top: '10px'
};

class History extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }

    render() {
      return (
        <div style={style4}>
          <div style={style3}>
            <h3>Q</h3>
          </div>
          <div style={style3}>
            <h3>A</h3>
          </div>
        </div>
      );
    }
  }
  
  export default History;
