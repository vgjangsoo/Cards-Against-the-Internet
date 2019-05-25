import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Card.jsx"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
<<<<<<< HEAD
      cards: []
=======
      data: 'Data: nothing to show here'
>>>>>>> chris-repo
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
      cardData.push(elm)
    }

    return (
      <div className="App">
        <h1> Message: { this.state.message }</h1>
        <h2> Data: {this.state.data} </h2>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>  
        <span> | </span>
        <button onClick={this.fetchData2} >
          Change both
        </button> 
      </div>
    );
  }
}

export default App;
