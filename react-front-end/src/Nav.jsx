import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  render() {
    return (
      <Route>
        <div>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm home-nav">
          <h5 className="my-0 mr-md-auto font-weight-normal text-white navbar-logo"><Link className="navbar-logo responsive-logo" to="/" style={{color: 'white', textDecoration: 'none'}}> Cards Against Internet</Link> </h5>
            <nav className="my-2 my-md-0 mr-md-3">
            <a className="navbar-a p-2 text-white" style={{color: 'white', textDecoration: 'none'}}>{this.props.userData.username ? `Logged in as: ${this.props.userData.username}` : null}</a>
              <a className="navbar-a p-2 text-white" href="#" style={{color: 'white', textDecoration: 'none'}}>Leaderboard</a>
              {this.props.userData.username 
                ? <button className="btn btn-dark sign-up-button btn-md nav-signup-button" onClick={this.props.onLogout}>Log Out</button> 
                : <button className="btn btn-dark sign-up-button btn-md nav-signup-button" onClick={this.props.onOpen}>Sign up</button>}
            </nav>
          </div>
        </div>
      </Route>
    );
  }
}

export default Nav;


