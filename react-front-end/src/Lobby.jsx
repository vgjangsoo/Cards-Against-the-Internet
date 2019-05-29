import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx"
import { API_ROOT } from './constants';

class Lobby extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateRoomModal: false,
      createdRooms: [],
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
    
    axios.post(`${API_ROOT}/games`, { postData })
    .then((res) => {
      console.log(res.data);
    })

    event.target.theme.value = '';
  }

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });
  
  componentDidMount() {
    axios.get(`${API_ROOT}/games`)
    .then(res => {

      res.data.map(e => 
        this.setState({ createdRooms: [...this.state.createdRooms, e] })
      )
    });
  };


    render() {
      const createdGameRooms = this.state.createdRooms.reverse();
      return (
        <div className="App">
          <LobbyNav createRoom={this.openCreateRoomModal} />

          <div className="container">
            <div className="card-deck mb-3 text-center">
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

  
