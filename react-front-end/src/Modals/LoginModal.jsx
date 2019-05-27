import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class LoginModal extends Component {

  submitLogin(e) {}

  render() {

    return (
      <div className='bg-modal'>
        <div className='modal-contents'>
          <div>
            <h2>Login | Register</h2>
          </div>
          <div>
            <button className="btn btn-dark btn-md" onClick={this.props.onClose}>X</button>
          </div>
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <button className="btn btn-dark btn-md">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;