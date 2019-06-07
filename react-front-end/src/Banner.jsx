import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  render() {
    return (
     <div>
        <main role="main">
          <div className="jumbotron">
            <div className="container banner-container">
              <h1 className="display-3 jumbotron-h1"> Hello, Trolls!</h1>
              <p className="jumbotron-p">What is Cards Against Internet?<br></br> <h3 className="banner-blah">It's Card Against Humanity but online!!!</h3> <br></br> <h4 className="banner-extra">Play the game and find out yourself!</h4></p>
              <p><button className="btn btn-dark btn-lg banner-button banner-button-banner" onClick={this.props.onOpen} style={{color: 'white', textDecoration: 'none'}}>Login / Register &raquo;</button></p>
            </div>
          </div>

            
          <div className="container option-container">
            <div className="row option-row">
              <div className="col-md-4 option-section">
                <h2 className="option-header">Quick Start</h2>
                <p className="option-p">Create an account first to play and enjoy our Everyone version that is suitable for people in all ages! </p>
                <Link to="/lobby"><p><span style={{color: 'white', textDecoration: 'none'}} className="btn btn-dark btn-md banner-button banner-button1" role="button">Go to Lobby &raquo;</span></p></Link>
              </div>
              <div className="col-md-4 option-section">
                <h2 className="option-header">Fun Experience</h2>
                <p className="option-p">Sign up to experience and enjoy our Sassy adult version and be the best player in the leaderboard! </p>
                {this.props.userData.username 
                  ? <Link to="/lobby"><p><span style={{color: 'white', textDecoration: 'none'}} className="btn btn-dark btn-md banner-button banner-button2" role="button">Play as User &raquo;</span></p></Link>
                  : <div to="/lobby"><p><span style={{color: 'white', textDecoration: 'none'}} className="btn btn-dark btn-md banner-button" role="button">Play as User &raquo;</span></p></div>}
              </div>
              <div className="col-md-4 option-section">
                <h2 className="option-header">Make own cards</h2>
                <p className="option-p">Do you want to share your stupid ideas? Create your own cards and share your trollness with other players!</p>
                <p><button className="btn btn-dark btn-md banner-button" onClick={this.props.openIdeaModal} role="button">Share Your Ideas &raquo;</button></p>
              </div>
            </div>
            <hr />
          </div> 
        </main>
      </div>
    );
  }
}

export default Banner;


