import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Chat from './Chat.jsx';
import AnswererDeck from './AnswererDeck.jsx';
import QuestionerDeck from './QuestionerDeck.jsx';
import History from './History';

const style = {
  marginTop: '5px',
  border: '1px solid',
  padding: '15px',
  borderRadius: '5px'
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
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-sm nav-bar-in-game">
          <h3 className="my-0 mr-md-auto font-weight-normal"> <h6 className='room-name'>Room #1: </h6>{gameRoomInfo.room}</h3>
          <nav className="my-2 my-md-1 mr-md-3">
            <button className="btn btn-dark btn-md p-2">Start</button>
          </nav>
          <nav className="my-2 my-md-1 mr-md-3">
            <Link to='/lobby'><button className="btn btn-dark btn-md p-2">Leave Room</button></Link>
          </nav>
        </div>

        <div className="ingame-room container">
          <form>
            <div>
              <div className="questioner col-9" style={style}>
                <QuestionerDeck />
              </div>
              <div className='status-message'>
                <h6>Status Message</h6>
              </div>
              <div className='play-card-button'>
                <button className='btn btn-dark btn-md p-2'>Play Card</button>
              </div>
              <div className="answerers col-9" style={style}>
                <AnswererDeck />
              </div>
              <br />
            </div>
          </form>
        </div>
        <div className="chat-history-bar">
          <div>
            <History />
          </div>
          <div>
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
