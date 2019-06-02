import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginModal from "./Modals/LoginModal.jsx"
import Nav from "./Nav.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import SubmitIdeaModal from './Modals/SubmitIdeadModal';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      data: 'Data: nothing to show here',
      showModal: false,
      showSubmitIdeas: false
    };
  }
  
  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  closeIdeaModal = () => this.setState({ showSubmitIdeas: false });
  openIdeaModal = () => this.setState({ showSubmitIdeas: true });

  render() {
    return (
      <Route>
       <Nav onOpen={this.openModal}/>
       <Banner onOpen={this.openModal} openIdeaModal={this.openIdeaModal}/>
       <Footer onOpen={this.openModal}/>
       <div>
         {this.state.showModal ? (<LoginModal onClose={this.closeModal}/>) : null}
       </div>
       <div>
         {this.state.showSubmitIdeas ? (<SubmitIdeaModal closeIdeaModal={this.closeIdeaModal} openIdeaModal={this.openIdeaModal}/>) : null}
       </div>
      </Route>
    );
  }
}

export default Home;
