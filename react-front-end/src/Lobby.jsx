import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx"
import { API_ROOT, API_WS_ROOT, HEADERS } from './constants';
import { ActionCableConsumer } from 'react-actioncable-provider';

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateRoomModal: false,
      lobbyState: []
    };
    this.handleRoomCreate = this.handleRoomCreate.bind(this);
  }
  
  componentDidMount() {
    // http GET request to api/lobbies  
    axios.get(`${API_ROOT}/lobbies`)
    .then(res => {
      console.log("RESRES", res.data)
      res.data.map(e => {
        this.setState({ lobbyState: [...this.state.lobbyState, e] })
      })
    });
  };
  
  handleRoomCreate(event) {
    event.preventDefault();

    const newRoom = event.target.theme.value;
    const newRoomPlayer = event.target.playerNumber.value;
    const newRoomRound = event.target.roundNumber.value;
    
    // const newRoomInfo = {
    //   room: newRoom,
    //   maxPlayers: newRoomPlayer,
    //   rounds: newRoomRound
    // }
    // console.log('newRoomInfo:',newRoomInfo)

    const roomData = {
      maxPlayer: newRoomPlayer,
      theme: newRoom
    }

    axios.post(`${API_ROOT}/lobbies`, roomData)
    .then(res => {
      console.log('POST is successful')
      //some cleanup action after good post request?
    })


    // NOTE: should NOT change lobbyState here
    // this.setState({
    //   lobbyState: [...this.state.lobbyState, newRoomInfo]
    // });
    // TODO: need to add

    event.target.theme.value = '';
  }

  handleRecievedLobby = response => {
    console.log('INSIDE WS: handleRecievedLobby function')
    const {lobby} = response
    console.log(lobby)

    // const newRoom = lobby.theme
    // const newRoomPlayer = lobby.maxPlayer
    // const newRoomRound = lobby

    const newLobbyInfo = {
      theme: lobby.theme,
      maxPlayers: lobby.maxPlayer,
      currentPlayers: lobby.currentPlayers,
      roomStatus: lobby.roomStatus
    }
    //update lobbyState to show new lobby room
    this.setState({
      lobbyState: [...this.state.lobbyState, newLobbyInfo]
    });
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
    render() {
      const createdGameRooms = this.state.lobbyState.reverse();
    
      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <ActionCableConsumer
                channel={{ channel: 'LobbiesChannel' }}
                onReceived={this.handleRecievedLobby}
              />
              {createdGameRooms.reverse().map(e => {
                return (
                  <Gameroom roomInfo={e} key={e.id} roomId={e.id}/>
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

  
