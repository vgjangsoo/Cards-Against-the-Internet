import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class QuestionerDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchQuestionCards() {
    axios.get('/api/cards')
    .then((res) => {
      console.log(res.data);
    })
  }

  componentDidMount() {
    this.fetchQuestionCards();
  }

  render() {
    return (
      <div className="Game">
        <h3>Questioner's Cards</h3>       
      </div>
    );
  }
}
  
  export default QuestionerDeck;