import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card.jsx"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      cards: []
    }
  }

  fetchData = () => {
    axios.get('/api/allcards') 
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message)
      console.log(response.data.message.cards) // Just the message
      this.setState({
        cards: response.data.message.cards
      });
    }) 
  }



  render() {
    let cardData = [];
    for (let elm in this.state.cards) {
      cardData.push(elm)
    }

    return (
      <div className="App">
      <h1>{cardData}</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
        <Card />
      </div>
    );
  }
}

export default App;
