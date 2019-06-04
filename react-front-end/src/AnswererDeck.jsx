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

  componentDidMount() {
    //this.fetchAnswerCards();
    // check currentUser id and match to this.props.gameState user.id
    // render only that players cards
    // let numPlayers = this.props.gameState.gameInfo.currentPlayers
    // console.log(this.props)
    // for (let i= 0; i < numPlayers-1; i++ ){
      //   if (this.props.userData.id === this.props.gameState.playersInfo.users[i].id){
        //     console.log('FOUND currentUser in playersInfo, id:', this.state.currentUser.id )
        //     for (let k=0; k<5; k++){
          //       //push in 5 answer cards
          //       tempCards.push(this.props.gameState.playersInfo.users[i].answerCards[k])
          //     }
          //   }
          // }
          
    const tempCards = [];
    for (let k=0; k<5; k++){
      //push in 5 answer cards
      tempCards.push(this.props.activeUserInfo.answerCards[k])
    }

    // console.log('ANSWERS tempCards is:',tempCards)
    this.setState({answers: tempCards})
  }
  
  render() {
    const selectedAnswers = this.state.answers;

    return (
      <div className="Game">
        <h4>Answerers' Cards</h4>
        <div className=' answerers-cards'>
        
          <div className='d-inline-flex flex-row'>
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
