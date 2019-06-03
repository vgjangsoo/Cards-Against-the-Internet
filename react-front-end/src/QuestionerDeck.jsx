import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
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
    // this.fetchQuestionCards();
    let questionerID = this.props.gameState.gameInfo.currentQuestioner
    let numPlayers = this.props.gameState.gameInfo.currentPlayers
    const tempCards = [];
    console.log(this.props)
    for (let i= 0; i < numPlayers-1; i++ ){
      if (this.props.userData.id === questionerID){
        console.log('FOUND questioner in playersInfo, id:', this.state.currentUser.id )
        for (let k=0; k<3; k++){
          //push in 3 question cards
          tempCards.push(this.props.gameState.playersInfo.users[i].questionCards[k])
        }
      }
    }
    console.log('tempCards is:',tempCards)
    this.setState({questions: tempCards})
  }

  render() {
    const selectedQuestions = this.state.questions;
    
    return (
      <div>
        <h4>Questioner's Cards</h4>
        <div className='d-flex flex-row justify-content-around'>
          {selectedQuestions.map((question, index )=> {

            return (
              <div className="deckCard card questioncards" style={{width: "18rem"}} key={index} onClick={() => {this.props.onSelectQuestion(question)}}>
                <div className='cardContainer'>
                  <div className="card-body">
                    <div className="card-text" >{question}</div>
                  </div>
                </div>
              </div>
            )
          })}   
        </div> 
      </div>
    );
  }
}
  
  export default QuestionerDeck;