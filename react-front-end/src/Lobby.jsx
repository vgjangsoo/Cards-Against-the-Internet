import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx"

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

    event.target.theme.value = '';
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
    render() {

      const newGameRooms = this.state.newRooms.reverse();

      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center">
              {newGameRooms.reverse().map(e => {
                return (
                  <Gameroom roomInfo={e} />
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

  
