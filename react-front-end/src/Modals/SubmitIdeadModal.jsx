import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class SubmitIdeaModal extends Component {

  render() {

    return (
      <div className='bg-modal'>
        <div className='modal-contents'>
        <h1 className="h3 mb-3 font-weight-normal">Make own cards<button className="btn btn-danger btn-sm" onClick={this.props.closeIdeaModal}>X</button></h1>
          <form className="form-signin">
            <label for="cardIdea" className="sr-only">Suggest a card</label>
            <input type="cardidea" id="cardIdea" className="form-control" placeholder="Suggest a card" autoFocus></input>
            <button className="btn btn-lg btn-dark btn-block" type="submit">Submit Bad Idea</button>
          </form>
        </div>
      </div> 
    );
  }
}

export default SubmitIdeaModal;



