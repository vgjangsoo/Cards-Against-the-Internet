import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Footer extends Component {
constructor(props) {
  super(props)
  this.state = {
    message: 'Click the button to load data!'
  }
}

render() {
  return (
    <footer class="page-footer font-small unique-color-dark pt-4 bg-dark">
      <div class="container">
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1 text-white">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a href="/" class="btn btn-outline-light btn-lg btn-rounded text-white">Sign up!</a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright text-center py-3 text-white">© 2019 Copyright -
        <a class="text-white" href="/"> Cards Against Internet</a>
      </div>
    </footer>
  );
}
}

export default Footer;