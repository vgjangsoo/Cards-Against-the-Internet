import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginModal from "./Modals/LoginModal.jsx"
import Nav from "./Nav.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      data: 'Data: nothing to show here',
      showModal: false
    };
  }
  
  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });
  
  render() {
    return (
      <Route>
       <Nav onOpen={this.openModal}/>
       <Banner onOpen={this.openModal}/>
       <Footer onOpen={this.openModal}/>
       <div>
         {this.state.showModal ? (<LoginModal onClose={this.closeModal}/>) : null}
       </div>
      </Route>
    );
  }
}

export default Home;
