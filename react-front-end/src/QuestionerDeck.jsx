import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class QuestionerDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // an array of question cards
      questions: props.activeUserInfo.questionCards,
      selectedIndex: 0
    }
  }

  get selectedQuestion() {
    return this.props.gameState.gameInfo.selectedQuestion;
  }

  get questionCards() {
    return this.selectedQuestion ? [this.selectedQuestion] : this.props.activeUserInfo.questionCards;
  }

  // refactoring tips
  // send in all the question cards to this component
  // have properties of questionCard[], selectedIndex, onSelection, isPlayedCard
  // rendering based on these "dumb " properties, they should not change much
  // the value of properties to pass down is done inside <Game> 
  
  // componentDidMount() {
  //   const tempCards = [...this.props.activeUserInfo.questionCards];

  //   // console.log('Questions tempCards is:',tempCards)
  //   this.setState({questions: tempCards})

  //   if (this.selectedQuestion){

  //   }else {

  //   }
  //   let status = this.props.gameState.gameInfo.status
  //   if (status === 'Question selected, please choose an answer' || status.startsWith('Answer have been submitted by')){
  //     let selectedQuestion = this.props.gameState.gameInfo.selectedQuestion;
  //     let tempArray = []
  //     tempArray.push(selectedQuestion)  
  //     this.setState({questions: tempArray})
  //   }

  // }

  onQuestionCardClick = (index) => {
    console.log('cardIndex is:', index);
    this.props.onSelectQuestion(this.state.questions[index])
    this.setState({selectedIndex: index})
  };

  render() {
    // const selectedQuestions = this.state.questions;
    
    return (
      <div>
        <h4>Questioner's Cards</h4>
        <div className='d-flex flex-row justify-content-around'>
          {this.questionCards.map((question, index )=> {

            return (
              <div className="deckCard card questioncards" style={{width: "18rem"}} key={index} onClick={() => this.onQuestionCardClick(index)}>
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