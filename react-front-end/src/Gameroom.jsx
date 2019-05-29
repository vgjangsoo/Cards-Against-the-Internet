import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Game from "./Game.jsx";
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from './constants';

const themeStyle = {
  width: '100%',
  height: '120px',
};

class Gameroom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      roomStatus: 'Waiting...'
    }
  }
  
  componentDidMount = () => {
    // console.log(this.props.cable)
    axios.get(`${API_ROOT}/games`)
      .then(res => console.log("res:", res.data))
  };

  render() {
    const roomId = this.props.roomId;
    const propsSending = this.props.roomInfo;
    console.log("Propsending from gameroom: ", propsSending);
    return (
      
      <div className="card mb-4 shadow-lg">
        <div className="card-header">
          <span><h4 className="my-0 font-weight-normal">Room 1</h4></span>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">0 <small className="text-muted">/ {this.props.roomInfo.maxPlayers}</small></h1>
          <button className="btn btn-lg btn-block btn-outline-dark mt-3 mb-4" style={themeStyle}>
            <Link to={{ pathname: `/lobby/${roomId}`, state: {info: propsSending} }} style={{color: 'black', textDecoration: 'none'}}><h1>{this.props.roomInfo.room}</h1></Link>
          </button>
          <div className="btn btn-lg btn-block btn-outline-dark bg-outline-dark">{this.state.roomStatus}</div>
        </div>
      </div>
    
  
    );
  }
}

export default Gameroom;

  