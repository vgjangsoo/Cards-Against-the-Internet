import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class LobbyNav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Route>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal text-white"> <Link to="/" style={{color: 'white', textDecoration: 'none'}}> Cards Against the Internet</Link></h5>
          <nav className="my-2 my-md-0 mr-md-3">                    

            <button onClick={this.props.createRoom} className="btn btn-outline-light btn-dark btn-lg">Create Room</button>
          </nav>
        </div>
    </Route>
    );
  }
}

export default LobbyNav;