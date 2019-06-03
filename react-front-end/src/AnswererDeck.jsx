import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class AnswererDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      currentUser: this.props.userData
    }
  }
//need to disable this fetch request, and load in real data as a prop
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
    //this.fetchAnswerCards();
    // check currentUser id and match to this.props.gameState user.id
    // render only that players cards
    let numPlayers = this.props.gameState.gameInfo.currentPlayers
    const tempCards = [];
    console.log(this.props)
    for (let i= 0; i < numPlayers-1; i++ ){
      if (this.props.userData.id === this.props.gameState.playersInfo.users[i].id){
        console.log('FOUND currentUser in playersInfo, id:', this.state.currentUser.id )
        for (let k=0; k<5; k++){
          //push in 5 answer cards
          tempCards.push(this.props.gameState.playersInfo.users[i].answerCards[k])
        }
      }
    }
    console.log('tempCards is:',tempCards)
    this.setState({answers: tempCards})
  }
  
  render() {
    const selectedAnswers = this.state.answers;

    return (
      <div className="Game">
        <h4>Answerers' Cards</h4>
        <div className=' answerers-cards'>
        
          <div className='d-inline-flex flex-row justify-content-between content'>
          {selectedAnswers.map((answer, index) => {
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
