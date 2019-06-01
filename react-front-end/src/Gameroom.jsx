import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Game from "./Game.jsx";
import { ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "./constants";

const themeStyle = {
  width: "100%",
  height: "120px"
};

class Gameroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [],
      roomState: []
    };
  }

  render() {
    const roomInfo = this.props.roomInfo;
    // console.log('roomInfo:', roomInfo)
    // const roomId = this.props.roomId;

    return (
      <div className="gameroom mb-4 shadow-lg">
        <div className="card-header">
          <span>
            <h4 className="my-0 font-weight-normal">Room {roomInfo.id}</h4>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title pricing-card-title">
            Players &raquo; {roomInfo.currentPlayers}{" "}
            <small>/ {roomInfo.maxPlayer}</small>
          </h5>
          <button
            className="btn btn-lg btn-block btn-outline-dark mt-3 mb-4"
            style={themeStyle}
          >
            <Link
              to={{
                pathname: `/lobby/${roomInfo.id}`,
                state: { info: roomInfo }
              }}
              style={{ color: "black", textDecoration: "none" }}
            >
              <h1 className="gameroom-theme">{roomInfo.theme}</h1>
            </Link>
          </button>
          <div className="btn btn-lg btn-block btn-outline-dark bg-outline-dark">
            {roomInfo.roomStatus}
          </div>
        </div>
      </div>
    );
  }
}

export default Gameroom;
