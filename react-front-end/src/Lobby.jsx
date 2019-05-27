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
      showCreateRoomModal: false
    };
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
    render() {
      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center"> 
              <Gameroom />
              <Gameroom />
              <Gameroom />
            </div>
          </div>

          <div>
            {this.state.showCreateRoomModal ? (<CreateRoomModal onClose={this.closeCreateRoomModal}/>) : null}
          </div>
          
        </div>

      );
    }
  }
  
  export default Lobby;

  