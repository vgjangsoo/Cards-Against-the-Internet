import React, { Component } from 'react';
// import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WaitingPlayerCard from "./WaitingPlayerCard.jsx";

class AnswererDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      waitingPlayers: true
    }
  }

  // componentDidMount() {
    
  //   const tempCards = [];
  //   for (let k=0; k<5; k++){
  //     //push in 5 answer cards
  //     tempCards.push(this.props.activeUserInfo.answerCards[k])
  //   }

  //   // console.log('ANSWERS tempCards is:',tempCards)
  //   this.setState({answers: tempCards})
  // }
  
  // code from questionDeck deck to show only 1 card
  get selectedAnswer() {
    return this.props.activeUserInfo.selectedCard;
  }

  // code from questionDeck: to show 5 cards or only 1 card. Need to add code in render to work
  get AnswerCards() {
    return this.selectedAnswer ? [this.selectedAnswer] : this.props.activeUserInfo.answerCards;
  }

  get AllAnswerCards() {
    let gameStatus = this.props.gameState.gameInfo.status
    if (gameStatus.startsWith("All answers have been submitted,")){
      return this.props.activeUserInfo.answerCards
    }else{
      return this.AnswerCards
    }
  }

  render() {
    // const selectedAnswers = this.state.answers;

    return (
      <div className="Game">
        <h4>Answerers' Cards</h4>
        <div className=' answerers-cards'>
        
          <div className='d-inline-flex flex-row'>
          {this.AllAnswerCards.map((answer, index) => {
            return (
              <div className='deckCard card answer-card' key={index} onClick={() => {this.props.onSelectAnswer(answer)}}>
                <div className='cardContainer'>
                  <div className="card-body">
                    <div className="card-text">{answer}</div>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default AnswererDeck;

