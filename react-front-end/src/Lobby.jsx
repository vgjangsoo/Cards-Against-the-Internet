import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx"

function ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateRoomModal: false,
      newRooms: []
    };
    this.handleRoomCreate = this.handleRoomCreate.bind(this);
  }

  handleRoomCreate(event) {
    event.preventDefault();

    const newRoom = event.target.theme.value;
    const newRoomPlayer = event.target.playerNumber.value;
    const newRoomRound = event.target.roundNumber.value;

    const newRoomInfo = {
      room: newRoom,
      maxPlayers: newRoomPlayer,
      rounds: newRoomRound
    }

    this.setState({
      newRooms: [...this.state.newRooms, newRoomInfo]
    });

    const postData = {
      maxRound: newRoomRound,
      currentRound: 0,
      isEveryoneDeck: true,
      currentQuestion: 0,
      currentAnswer: 0,
      maxPlayers: newRoomPlayer,
      creator: 0,
      currentQuestioner: 0,
      roundWinner: 0,
      deckId: 0,
      gameStatus: 'waiting'
    }

    axios.post('/api/games', { postData })
    .then((res) => {
      console.log(res.data);
    })

    event.target.theme.value = '';
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
    render() {
      
      const roomId = ID();
      const newGameRooms = this.state.newRooms.reverse();

      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center">
              {newGameRooms.reverse().map(e => {
                return (
                  <Gameroom roomInfo={e} key={roomId} roomId={roomId}/>
                )
              })} 
            </div>
          </div>

          <div>
            {this.state.showCreateRoomModal ? (<CreateRoomModal handleRoomCreate={this.handleRoomCreate} onClose={this.closeCreateRoomModal}/>) : null}
          </div>
          
        </div>

      );
    }
  }
  
  export default Lobby;

  
