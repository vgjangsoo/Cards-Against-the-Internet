import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class AnswererDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }
  }

  fetchAnswerCards() {
    axios.get('/api/cards')
    .then((res) => {
      const deckCards = res.data.message.cards;
      let answerCards = [];
      for (let card in deckCards) {
        if (deckCards[card].isQuestion === false) {
          answerCards.push(deckCards[card]);
        }
      }

      let answers = [];

      const randomNum1 = Math.floor(Math.random() * (answerCards.length));
      answers.push(answerCards[randomNum1]);
      let index1 = answerCards.indexOf(answerCards[randomNum1])

      if (index1 > -1) {
        answerCards.splice(index1, 1);
      }

      const randomNum2 = Math.floor(Math.random() * (answerCards.length));
      answers.push(answerCards[randomNum2]);
      let index2 = answerCards.indexOf(answerCards[randomNum2])

      if (index2 > -1) {
        answerCards.splice(index2, 1);
      }

      const randomNum3 = Math.floor(Math.random() * (answerCards.length));
      answers.push(answerCards[randomNum3]);
      let index3 = answerCards.indexOf(answerCards[randomNum3])

      if (index3 > -1) {
        answerCards.splice(index3, 1);
      }

      const randomNum4 = Math.floor(Math.random() * (answerCards.length));
      answers.push(answerCards[randomNum4]);
      let index4 = answerCards.indexOf(answerCards[randomNum4])

      if (index4 > -1) {
        answerCards.splice(index4, 1);
      }
      
      const randomNum5 = Math.floor(Math.random() * (answerCards.length));
      answers.push(answerCards[randomNum5]);
      let index5 = answerCards.indexOf(answerCards[randomNum5])

      if (index5 > -1) {
        answerCards.splice(index5, 1);
      }

      this.setState({ answers: answers });
    })
  }

  componentDidMount() {
    this.fetchAnswerCards();
  }
  
  render() {
    const selectedAnswers = this.state.answers;
    console.log(selectedAnswers);
    return (
      <div className="Game">
        <h3>Answerers' Cards</h3>
        {selectedAnswers.map(e => {
          return (
            <div key={e.id}>{e.content}</div>
          )
        })}
      </div>
    );
  }
}
  
export default AnswererDeck;
