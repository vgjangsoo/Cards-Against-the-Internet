import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class QuestionerDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      questions: []
    }
  }

  fetchQuestionCards() {
    axios.get('/api/cards')
    .then((res) => {
      const deckCards = res.data.message.cards;
      let questionCards = [];
      for (let card in deckCards) {
        if (deckCards[card].isQuestion === true) {
          questionCards.push(deckCards[card]);
        }
      }

      let questions = [];

      const randomNum1 = Math.floor(Math.random() * (questionCards.length));
      questions.push(questionCards[randomNum1]);
      let index1 = questionCards.indexOf(questionCards[randomNum1])

      if (index1 > -1) {
        questionCards.splice(index1, 1);
      }

      const randomNum2 = Math.floor(Math.random() * (questionCards.length));
      questions.push(questionCards[randomNum2]);
      let index2 = questionCards.indexOf(questionCards[randomNum2])

      if (index2 > -1) {
        questionCards.splice(index2, 1);
      }

      const randomNum3 = Math.floor(Math.random() * (questionCards.length));
      questions.push(questionCards[randomNum3]);
      let index3 = questionCards.indexOf(questionCards[randomNum3])

      if (index3 > -1) {
        questionCards.splice(index3, 1);
      }

      this.setState({ questions: questions });
    })
  }

  componentDidMount() {
    this.fetchQuestionCards();
  }

  render() {
    const selectedQuestions = this.state.questions;
    
    return (
      <div className="Game">
        <h3>Questioner's Cards</h3>
        {selectedQuestions.map(e => {
          return (
            <div key={e.id}>{e.content}</div>
          )
        })}    
      </div>
    );
  }
}
  
  export default QuestionerDeck;