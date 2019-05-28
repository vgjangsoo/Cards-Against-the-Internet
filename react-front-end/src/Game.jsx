import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Chat from './Chat.jsx';
import AnswererDeck from './AnswererDeck.jsx';
import QuestionerDeck from './QuestionerDeck.jsx';
import History from './History';

const style = {
  marginTop: '10px',
  border: '2px solid',
  display: 'flex-box',
  width: '500px',
  marginLeft: '50px',
  padding: '50px'
};

const style2 = {
  marginTop: '-150px',
  border: '2px solid',
  display: 'flex',
  width: '100px',
  padding: '50px',
  flexDirection: 'row',
  position: 'absolute',
  right: '100px',
  height: '300px'
};

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roominfo: this.props
    }
  }
  
  render() {
    const gameRoomInfo = this.state.roominfo.location.state.info;
    return (
      <div className="Game">
        <h1>Room #1: {gameRoomInfo.room}</h1>
        <button>Start</button>
        <Link to='/lobby'><button>Leave Room</button></Link>
        <div>
          <div className="questioner" style={style}>
            <QuestionerDeck />
          </div>
          <div>
            <History />
          </div>
          <div style={style2}>
            <Chat />
          </div>
          <div>
            <h6>Status Message</h6>
          </div>
          <div>
            <button>Play Card</button>
          </div>
          <div className="answeres" style={style}>
            <AnswererDeck />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;