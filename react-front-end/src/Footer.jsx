import React, { Component } from 'react';
import axios from 'axios';
import './css/Footer.css';
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
        <div className="container">
            <div className="row">
                <div className="col-sm-3 footer-logo">
                    <h2 className="logo"><a href="#"> Cards Against Internet </a></h2>
                </div>
                <div className="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a onClick={this.props.onOpen} href="#">Sign up</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#" >Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="https://twitter.com/login?lang=en" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.facebook.com/login/" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="https://mail.google.com/mail/u/0/" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-dark">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2019 Copyright </p>
        </div>
    </footer>
  );
}
}

export default Footer;
