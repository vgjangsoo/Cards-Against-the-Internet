import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class CreateRoomModal extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      newRooms:[]
    }
  }

  render() {

    return (
      <div className='bg-modal'>
        <div className='modal-contents'>
          <form className="form-signin" onSubmit={this.props.handleRoomCreate}>
            <h1 className="h3 mb-3 font-weight-normal">Room Settings <button className="btn btn-danger btn-sm" onClick={this.props.onClose}>X</button></h1>
            <label className="sr-only">Theme</label>
            <input type="theme" id="theme" className="form-control" placeholder="Theme" autoFocus required></input>
            <button className="btn btn-md btn-dark btn-block" type="submit">Randomize Theme</button>

            <select className="custom-select d-block w-100" id="playerNumber" required>
              <option value="">Player #</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <select className="custom-select d-block w-100" id="roundNumber" required>
              <option value="">Round #</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button className="btn btn-md btn-dark btn-block" type="submit">Create Room</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateRoomModal;
