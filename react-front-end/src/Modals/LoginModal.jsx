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
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Register | Login <button className="btn btn-danger btn-sm" onClick={this.props.onClose}>X</button></h1>

           
            <label for="inputEmail" className="sr-only">Username</label>
            <input type="username" id="userName" className="form-control" placeholder="Username" required autofocus></input>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
            <button className="btn btn-lg btn-dark btn-block" type="submit">Login</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
          </form>
        </div>
      </div> 
    );
  }
}

export default LoginModal;



