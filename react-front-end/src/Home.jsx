import React, { Component } from 'react';
import './css/App.css';
import { Route, Redirect } from "react-router-dom";
import LoginModal from "./Modals/LoginModal.jsx"
import Nav from "./Nav.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import SubmitIdeaModal from './Modals/SubmitIdeadModal';
import axios from 'axios';
import { API_ROOT, API_WS_ROOT, HEADERS } from "./constants";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showSubmitIdeas: false
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }
  
  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  closeIdeaModal = () => this.setState({ showSubmitIdeas: false });
  openIdeaModal = () => this.setState({ showSubmitIdeas: true });

  getCurrentUser (){
    let user = localStorage.getItem('browserUserData')
    console.log('localStorage user is:', user)
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log('=====handleSignUp=====')
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    
    const signupData = {
      user: {
        username: username, 
        email: email, 
        password: password
      }
    }
    console.log(signupData)

    axios.post(`${API_ROOT}/users`, signupData).then(res => {
      console.log("signup POST is successful. RES.DATA:", res.data);
      localStorage.setItem('browserUserData', JSON.stringify(res.data))
    });
    
    // .then(() =>{
    //   // trying to console log the localStorage user
    //   this.getCurrentUser()

    // })
    
  }



  render() {
    const currentUser = localStorage.getItem('browserUserData')
    console.log('currentUser is:',currentUser )
    return (
      <Route>
       <Nav onOpen={this.openModal}/>
       <Banner onOpen={this.openModal} openIdeaModal={this.openIdeaModal}/>
       <Footer onOpen={this.openModal}/>
       <div>
         {this.state.showModal ? (<LoginModal onClose={this.closeModal} handleSignUp={this.handleSignUp}/>) : null}
       </div>
       <div>
         {this.state.showSubmitIdeas ? (<SubmitIdeaModal closeIdeaModal={this.closeIdeaModal} openIdeaModal={this.openIdeaModal}/>) : null}
       </div>
      </Route>
    );
  }
}

export default Home;
