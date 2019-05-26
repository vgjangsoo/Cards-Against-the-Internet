import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class LoginModal extends Component {

  submitLogin(e) {}

  render() {

    return (
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <div>
          <button onClick={this.props.onClose}>X</button>
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginModal;
