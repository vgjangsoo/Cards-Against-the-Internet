import React, { Component } from "react";
import axios from "axios";
import "../css/App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class CreateRoomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRooms: []
    };
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
              className="room-theme"
              placeholder="Game Theme"
              required
            />
            <button className="btn btn-md btn-dark btn-block" type="submit">
              Randomize Theme
            </button>

            <div class="room-toggle-down">
              <div class="custom-dropdown">
                <select id="playerNumber" required>
                  <option>Player #</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="custom-dropdown">
                <select id="roundNumber" required>
                  <option>Round #</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <button className="btn btn-md btn-dark btn-block" type="submit">
              Create Room
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRoomModal;
