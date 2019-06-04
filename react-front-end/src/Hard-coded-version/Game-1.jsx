import React, { Component } from 'react';
import '../css/App.css';
import '../css/Loader.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Chat1 from './Chat-1.jsx';
import History from '../History';
import QuestionSection from '../QuestionSection.jsx';
import { API_ROOT, API_WS_ROOT, HEADERS, loadingGameState } from "../constants";
import actioncable from "actioncable";

//pass this cable prop down to any component that needs socket connections
const cable = actioncable.createConsumer(API_WS_ROOT);

const style = {
  marginTop: '5px',
  border: '1px solid',
  padding: '15px',
  borderRadius: '5px'
};

class Game1 extends Component {
  constructor(props) {
    super(props)
    ///use loadingGameState to fake loading data until real data comes
    this.state = {
      loadingGameState: loadingGameState,
      gameTable: {}
    }
  }

  render() {
    console.log("PROPS FROM GAME1:", this.props);
    const gameTable = this.props.location.state.gameTable;
       
    return (
      <div>
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-sm nav-bar-in-game">
          <div className="my-0 mr-md-auto font-weight-normal">
            <h6 className='room-name'>Room: {gameTable.id} </h6>
            <h3> {gameTable.theme}</h3>
          </div>
          <nav className="my-2 my-md-1 mr-md-3 game-round">
            <div className="p-5">
              <h6>Round: {gameTable.gameState.gameInfo.currentRound + 1} / {gameTable.maxRound}</h6>
              <h6>Players: {gameTable.gameState.gameInfo.currentPlayers} / {gameTable.maxPlayers}</h6>
            </div>
          </nav>
          <nav className="my-2 my-md-1 mr-md-3">
            <button className="btn btn-dark btn-md p-2" onClick={this.handlerReadyButton} >Ready?</button>
          </nav>
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
                <QuestionSection />
              </div>
              <div className='status-message'>
                <h6>Waiting for cards to be selected...</h6> 
              </div>
              <div className='play-card-button'>
                <button className='btn btn-dark btn-md p-2'>Play Card</button>
              </div>
              <div className="answerers col-9" style={style}>
                <div className="Game">
                  <h4>Answerers' Cards</h4>
                <div className=' answerers-cards'>

                  <div className='d-inline-flex flex-row justify-content-between content'>
                    <div className='deckCard card answer-card'>
                      <div className='cardContainer'>
                        <div className="card-body">
                          <div className="card-text">Hey!</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
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
            <Chat1 userData={this.props.userData} userInfo={gameTable}/>
          </div>
        </div>
      </div>    
      </div>
    )
  }
}

export default Game1;
