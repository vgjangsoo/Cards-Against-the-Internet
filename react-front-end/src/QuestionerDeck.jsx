import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class QuestionerDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      status: ""
    }
  }

  
  componentDidMount() {
    // this.fetchQuestionCards();
    const tempCards = [];
    for (let k=0; k<this.props.activeUserInfo.questionCards.length; k++){
      //push in 3 question cards
      tempCards.push(this.props.activeUserInfo.questionCards[k])
    }
    // console.log('Questions tempCards is:',tempCards)
    this.setState({questions: tempCards})

    let status = this.props.gameState.gameInfo.status
    if (status === 'Question selected, please choose an answer'){
      let selectedQuestion = this.props.gameState.gameInfo.selectedQuestion;
      let tempArray = []
      tempArray.push(selectedQuestion)  
      this.setState({questions: tempArray})
    }

  }

  // componentWillUpdate = () => {
  //   let status = this.props.gameState.gameInfo.status
  //    next line runs an infinite loop, CANNOT USE
  //   if (status === 'Question selected, please choose an answer'){
  //     let selectedQuestion = this.props.gameState.gameInfo.selectedQuestion;
  //     let tempArray = []
  //     tempArray.push(selectedQuestion)  
  //     this.setState({questions: tempArray})
  //     return;
  //   } 
  // }

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