import React, { Component } from 'react';
import axios from 'axios';
import './Footer.css';
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
    <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><a href="#"> Cards Against Internet </a></h2>
                </div>
                <div class="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a onClick={this.props.onOpen} href="#">Sign up</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#" >Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" class="btn btn-dark">Contact us</button>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2019 Copyright </p>
        </div>
    </footer>
  );
}
}

export default Footer;
