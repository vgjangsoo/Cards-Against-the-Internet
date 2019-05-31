import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Gameroom from "./Gameroom.jsx";
import LobbyNav from "./LobbyNav.jsx";
import CreateRoomModal from "./Modals/CreateRoomModal.jsx";
import { API_ROOT, API_WS_ROOT, HEADERS } from "./constants";
import { ActionCableConsumer } from "react-actioncable-provider";

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
  }

  componentDidMount() {
    // http GET request to api/lobbies
    axios.get(`${API_ROOT}/lobbies`).then(res => {
      console.log("RESRES", res.data);
      this.setState({ lobbyState: [...this.state.lobbyState, ...res.data] });
      // res.data.map(e => {
      // })
    });
  }

  handleRoomCreate(event) {
    event.preventDefault();

    const newRoom = event.target.theme.value;
    const newRoomPlayer = event.target.playerNumber.value;

    const roomData = {
      maxPlayer: newRoomPlayer,
      theme: newRoom
    };

    axios.post(`${API_ROOT}/lobbies`, roomData).then(res => {
      console.log("POST is successful");
    });

    event.target.theme.value = "";
  }
  // handler function for the incoming WS broadcast
  handleRecievedLobby = response => {
    console.log("INSIDE WS: handleRecievedLobby function");
    const { lobby } = response;
    console.log(lobby);

    const newLobbyInfo = {
      theme: lobby.theme,
      maxPlayers: lobby.maxPlayer,
      currentPlayers: lobby.currentPlayers,
      roomStatus: lobby.roomStatus,
      id: lobby.id
    };
    //update lobbyState to show new lobby room
    this.setState({
      lobbyState: [...this.state.lobbyState, newLobbyInfo]
    });
  };

  closeCreateRoomModal = () => this.setState({ showCreateRoomModal: false });
  openCreateRoomModal = () => this.setState({ showCreateRoomModal: true });

  render() {
    //contains data for display all current lobbies
    const createdGameRooms = this.state.lobbyState;

    return (
      <div className="App">
        <LobbyNav createRoom={this.openCreateRoomModal} />

        {/* <ActionCableConsumer
          channel="LobbiesChannel"
          onConnected={e => console.log("WS new connection made", e)}
          onReceived={this.handleRecievedLobby}
          onDisconnected={e =>
            console.log("WS connection is now disconnected", e)
          }
          onInitialized={e => console.log("WS --- initialized", e)}
          onRejected={e => console.log("WS --- rejected! ", e)}
        /> */}
        
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {createdGameRooms.reverse().map(e => {
              return <Gameroom roomInfo={e} key={e.id} roomId={e.id} />;
            })}
          </div>
        </div>

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
