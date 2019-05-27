import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class CreateRoomModal extends Component {

  createRoom(e) {}

  render() {

    return (
      <div className='bg-modal'>
        <div className='modal-contents'>
          <div>
            <h2>Room Settings</h2>
          </div>
          <div>
            <button className="btn btn-dark btn-md" onClick={this.props.onClose}>X</button>
          </div>
          <div>
            <input type="text" name="theme" placeholder="Theme" />
          </div>
          <div>
              <button className="btn btn-dark btn-md">Randomize Theme</button>
          </div>
          <label>
              Player #  
          </label>
          <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
          <label>
              Round #  
          </label>
          <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
          <div>
            <button className="btn btn-dark btn-md">Create Room</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRoomModal;
