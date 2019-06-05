import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import NoGameroom from "./NoGameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx";
import { API_ROOT, API_WS_ROOT, HEADERS } from "./constants";

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateRoomModal: false,
      lobbyState: []
    };
    // being passed down from parent component, will setup the sockect connection
    props.cable.subscriptions.create({ channel: "LobbiesChannel"}, {
      received: (data) => {
        // console.log('CABLE PROP DATA', data)
        this.handleRecievedLobby(data)
      }
    })

    this.handleRoomCreate = this.handleRoomCreate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  componentDidMount() {
    // http GET request to api/lobbies
    // use this to pass user_id info to pass user_id info to server
    // axios.get(`${API_ROOT}/lobbies?hello=${this.props.userId}`)
    axios.get(`${API_ROOT}/lobbies?hello=world3333`).then(res => {
      console.log("RESRES", res.data);
      this.setState({ lobbyState: [...this.state.lobbyState, ...res.data] });

    });
  }

  handleLogout(){
    console.log('Logout button is clicked')
    this.props.updateCurrentUser({})
  }

  handleRoomCreate(event) {
    event.preventDefault();

    const newRoom = event.target.theme.value;
    const newRoomPlayer = event.target.playerNumber.value;
    const maxRound = event.target.roundNumber.value;

    const roomData = {
      maxPlayer: newRoomPlayer,
      theme: newRoom
    };

    const gameData = {
      theme: newRoom,
      maxRound: maxRound,
      maxPlayers: newRoomPlayer,
    };

    axios.post(`${API_ROOT}/lobbies`, roomData).then(res => {
      console.log("POST is successful");
    });

    axios.post(`${API_ROOT}/games`, gameData).then(res => {
      console.log("POST to game succsfull")
    });

    event.target.theme.value = "";
    this.setState({
      showCreateRoomModal: false
    })
  }
  // handler function for the incoming WS broadcast
  handleRecievedLobby = response => {
    console.log("INSIDE WS: handleRecievedLobby function");
    const { lobby } = response;
    console.log(lobby);

    const newLobbyInfo = {
      theme: lobby.theme,
      maxPlayer: lobby.maxPlayer,
      currentPlayers: lobby.currentPlayers,
      roomStatus: lobby.roomStatus,
      id: lobby.id
    };
    console.log(newLobbyInfo)


    let currentLobbyState = this.state.lobbyState
    let isModifed = false;

    let modifiedLobbyState = currentLobbyState.map ( obj => {
      let modObj = obj
      
      if (modObj.id === newLobbyInfo.id){
        // if room id match, means room is already created
        console.log('Matched room id is: ', modObj.id)
        modObj.currentPlayers = newLobbyInfo.currentPlayers
        isModifed = true;
      }
      return modObj;
    });

    console.log('modfiedLobbyState:', modifiedLobbyState)
    //need to compare modifiedLobbyState key size if same,
    if (isModifed){
      this.setState({
        lobbyState: [...modifiedLobbyState]
      });
    }else {
      // if newLobbyinfo.id is NEW, then add to entry to lobbyState
      this.setState({
        lobbyState: [...this.state.lobbyState, newLobbyInfo]
      });
    } 
    
  };

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });

  render() {
    //contains data for display all current lobbies
    const createdGameRooms = this.state.lobbyState.reverse();
    const currentUser = localStorage.getItem('browserUserData')
    console.log('currentUser is:',currentUser )

    return (
      
      <div className="App">
        <LobbyNav createRoom={this.openCreateRoomModal} onLogout={this.handleLogout} userData={this.props.userData}/>
        {!this.state.lobbyState.length 
            ? 
            <div className="loader-container">
              <div className="loader"></div>
            </div>
            :
        <div className="container gameLobbyContainer">
          <div className="grid card-deck mb-3 text-center">
            {createdGameRooms.length > 0 ? createdGameRooms.reverse().map(e => {
              return <Gameroom roomInfo={e} key={e.id} roomId={e.id} cable={this.props.cable}/>;
            }) : <NoGameroom />}
          </div>
        </div>}

        <div>
          {this.state.showCreateRoomModal ? (
            <CreateRoomModal
              handleRoomCreate={this.handleRoomCreate}
              onClose={this.closeCreateRoomModal} 
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Lobby;

