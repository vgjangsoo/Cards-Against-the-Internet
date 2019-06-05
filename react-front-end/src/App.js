import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lobby from "./Lobby.jsx";
import Game from "./Game.jsx";
import Home from "./Home.jsx";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {} 
    };
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount(){
    if(cookies.get('currentUser')){
      this.setState({
        currentUser : cookies.get('currentUser')
      });   
    }
  }
// can add another state: currentUser that gets passed down as a prop to all other components to use 
  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  updateCurrentUser (user, isLogout){
    console.log('updateCurrentUser is called!!!!!')
    console.log(user)
    this.setState({
      currentUser: user
    });
    if (isLogout){
      console.log('clearning the currentUser from cookies')
      cookies.remove('currentUser')
    }else{
      cookies.set('currentUser', user)
    }
  }

  render() {


    //FOR ANY COMPONENT THAT NEEDS SOCKET CONNECTION, pass down as a prop: cable={this.props.cable}
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => <Home updateCurrentUser={this.updateCurrentUser} userData={this.state.currentUser}/>} />
            <Route path='/lobby' exact render={() => <Lobby cable={this.props.cable} userData={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>}/>
            {/* <Route path='/lobby/:id' component={Game}/>  */}
            <Route path='/lobby/:id' exact render={(props) => <Game {...props} updateCurrentUser={this.updateCurrentUser} userData={this.state.currentUser}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
