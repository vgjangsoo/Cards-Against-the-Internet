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
        message: 'Click the button to load data!',
        roomStatus: 'Waiting...'
      }
    }
  
    // - Some for loop will be required later when there are more than 1 Room
    // const gameRooms = this.props.rooms.map(room => {
    //   <Gameroom room={room} /> ???
    // });
    
    // - Need to figure out how to arrange 3 rooms by row

    render() {
      const roomName = this.props.roomName;
      const roomMaxPlayers = this.props.roomMaxPlayers[0];
      const roomMaxRounds = this.props.roomMaxRounds[0];

      return (
         
          <div className="card mb-4 shadow-lg">
            <div className="card-header">
              <span><h4 className="my-0 font-weight-normal">Room 1</h4></span>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">0 <small className="text-muted">/ {roomMaxPlayers}</small></h1>
              <button className="btn btn-lg btn-block btn-outline-dark mt-3 mb-4" style={themeStyle}>
                <Link to="/lobby/1" style={{color: 'black', textDecoration: 'none'}}><h1>{roomName}</h1></Link>
              </button>
              <div className="btn btn-lg btn-block btn-outline-dark bg-outline-dark">{this.state.roomStatus}</div>
            </div>
          </div>
       
      
      );
    }
  }
  
  export default Gameroom;

  