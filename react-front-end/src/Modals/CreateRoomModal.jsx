import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Words from "../Words/Words";
import { API_ROOT, API_WS_ROOT, HEADERS } from "../constants";

class CreateRoomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { randomizeWord: null };
    this.randomizeRoomName = this.randomizeRoomName.bind(this);
  }

  randomizeRoomName() {
    const words = Words;
    let number = Math.floor(Math.random() * words.length);
    axios.get(`${API_ROOT}/lobbies`).then(res => {
      for (let key in res.data) {
        if (res.data[key].theme !== words[number]) {
          this.setState({ randomizeWord: words[number] })
        }
      }
    })
  }

  render() {
    return (
      <div className="bg-modal">
        <div className="modal-contents-room">
          <button
            className="btn btn-danger btn-sm close-button"
            onClick={this.props.onClose}
          >
            X
          </button>
          <h1 id="room-header" className="h1 mb-3">
            {" "}
            <u>Room Settings</u>
          </h1>
          <form
            className="form-signin create-room-setting"
            onSubmit={this.props.handleRoomCreate}
          >
            <input
              type="theme"
              id="theme"
              className="room-theme words-appear"
              placeholder="Game Room Name"
              value={this.state.randomizeWord}
              required
            />
            <button className="btn btn-md btn-dark btn-block" type="button" onClick={this.randomizeRoomName}>
              Randomize Room Name
            </button>

            <div className="room-toggle-down">
              <div className="custom-dropdown">
                <select id="playerNumber" required>
                  <option>Player #</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="custom-dropdown">
                <select id="roundNumber" required>
                  <option>Round #</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            
              <button className="btn btn-md btn-dark btn-block" type="submit">Create Room</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRoomModal;
