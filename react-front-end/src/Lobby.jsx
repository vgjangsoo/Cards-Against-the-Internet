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
      newRooms: [],
      newRoomsPlayers: [],
      newRoomsRounds: []
    };
    this.handleRoomCreate = this.handleRoomCreate.bind(this);
  }

  handleRoomCreate(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.playerNumber.value);
    console.log(event.target.roundNumber.value);
    const newRoom = event.target.theme.value;
    const newRoomPlayer = event.target.playerNumber.value;
    const newRoomRound = event.target.roundNumber.value;
    this.state.newRooms.push(newRoom);
    this.state.newRoomsPlayers.push(newRoomPlayer);
    this.state.newRoomsRounds.push(newRoomRound);

    this.setState({
      newRooms: this.state.newRooms,
      newRoomsPlayers: this.state.newRoomsPlayers,
      newRoomsRounds: this.state.newRoomsRounds
    });
    event.target.theme.value = '';
    console.log(this.state)
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
    render() {
      const newGameRooms = this.state.newRooms.reverse();
      const newGameRoomsPlayers = this.state.newRoomsPlayers.reverse();
      const newGameRoomsRounds = this.state.newRoomsRounds.reverse();




      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center">
              {newGameRooms.reverse().map(e => {
                return (
                  <Gameroom roomName={e} roomMaxPlayers={newGameRoomsPlayers} roomMaxRounds={newGameRoomsRounds}/>
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

  
