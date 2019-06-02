import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lobby from "./Lobby.jsx";
import Game from "./Game.jsx";
import Home from "./Home.jsx";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  render() {
    //FOR ANY COMPONENT THAT NEEDS SOCKET CONNECTION, pass down as a prop: cable={this.props.cable}
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/lobby' exact render={() => <Lobby cable={this.props.cable}/>}/>
            <Route path='/lobby/:id' component={Game}/> 
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
