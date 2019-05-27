import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Lobby from "./Lobby.jsx";
import Game from "./Game.jsx";
import Home from "./Home.jsx";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      data: 'Data: nothing to show here',
    };
  }

  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  fetchData = () => {
    axios.get('/api/allcards') 
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message)
      console.log(response.data.message.cards) // Just the message
      console.log(response.data.message.cards[0]) // Just the message

      this.setState({
        cards: response.data.message.cards
      });
    })
    
  }
  
  fetchData2 = () => {
    axios.get('/api/display') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
  
      console.log(response.data.message) // Just the message
      // console.log(response.data.someData) // Just the message

      this.setState({
        data: response.data.message.data2,
        message: response.data.message.data1
      });
    })
    
  }

  render() {
    let cardData = [];
    for (let elm in this.state.cards) {
      cardData.push(this.state.cards[elm].content)
    }

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/lobby' exact render={() => <Lobby />}/>
            <Route path='/lobby/1' exact component={Game}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

{/* <button onClick={this.fetchData} >
  Fetch Data
</button>  
<span> | </span>
<button onClick={this.fetchData2} >
  Change both
</button> 
{cardData.map( elm => <h1> {elm + '\n'} </h1>)} */}