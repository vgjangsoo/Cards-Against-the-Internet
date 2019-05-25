import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Lobby extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message: 'Click the button to load data!'
      }
    }
  
    fetchData = () => {
      axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API
  
        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      }) 
    }
  
    render() {
      return (
        <div className="App">
          <h1>{ this.state.message }</h1>  
          <a href='/lobby/1' className="button">
          Go to the Game Room
          </a>     
        </div>
      );
    }
  }
  
  export default Lobby;