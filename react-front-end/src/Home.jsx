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
import LeaderboardModal from './Modals/LeaderboardModal';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showSubmitIdeas: false,
      showLeaderboard: false,
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);

  }
  
  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  closeIdeaModal = () => this.setState({ showSubmitIdeas: false });
  openIdeaModal = () => this.setState({ showSubmitIdeas: true });

  closeLeaderModal = () => this.setState({ showLeaderboard: false });
  openLeaderModal = () => this.setState({ showLeaderboard: true });

  //not used currently
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
      this.props.updateCurrentUser(res.data)
      localStorage.setItem('browserUserData', JSON.stringify(res.data))
    });

    this.setState({ showModal: false });
    // .then(() =>{
    //   // trying to console log the localStorage user
    //   this.getCurrentUser()

    // })
    
  }

  handleLogout(){
    console.log('Logout button is clicked')
    // localStorage.removeItem('browserUserData')
    this.props.updateCurrentUser({})
  }

  handleLogin(event) {
    event.preventDefault();
    console.log('Login button is clicked')
    console.log('=====handleLogin=====')
    const email = event.target.email.value
    const password = event.target.password.value
    
    const loginData = {
      user: {
        email: email, 
        password: password
      }
    }

    axios.post(`${API_ROOT}/login`, loginData).then(res => {
      console.log("login POST is successful. RES.DATA:", res.data);
      // this will setState for currentUser in App.js
      this.props.updateCurrentUser(res.data)
    });
    
    this.setState({ showModal: false });
  }

  render() {
    const currentUser = localStorage.getItem('browserUserData')
    console.log('currentUser is:',currentUser )
    return (
      <Route>
       <Nav onOpen={this.openModal} onLogout= {this.handleLogout} userData={this.props.userData} openLeaderModal={this.openLeaderModal} />
       <Banner onOpen={this.openModal} openIdeaModal={this.openIdeaModal} />
       <Footer onOpen={this.openModal}/>
       <div>
         {this.state.showModal ? (<LoginModal onClose={this.closeModal} handleSignUp={this.handleSignUp} handleLogin={this.handleLogin}/>) : null}
       </div>
       <div>
         {this.state.showSubmitIdeas ? (<SubmitIdeaModal closeIdeaModal={this.closeIdeaModal} openIdeaModal={this.openIdeaModal}/>) : null}
       </div>
       <div>
         {this.state.showLeaderboard ? (<LeaderboardModal closeLeaderModal={this.closeLeaderModal}/>) : null}
       </div>
      </Route>
    );
  }
}

export default Home;
