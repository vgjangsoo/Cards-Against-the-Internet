import React, { Component } from "react";
import "./css/App.css";

class QuestionSection extends Component {
  render() {
    return (
      <div>
        <h4 className="questioner-header">Questioner's Cards</h4>
        <div className="d-flex flex-row questioner-container">
          <div
            className="deckCardBeforeStartQ card questioncards"
            style={{ width: "18rem" }}
          >
            <div className="cardContainer">
              <div className="game-card-body">
                <div className="game-card-logo">
                  Cards <br />
                  Against <br />
                  Internet
                </div>
              </div>
            </div>
          </div>

          <div
            className="deckCardBeforeStartQ card questioncards"
            style={{ width: "18rem" }}
          >
            <div className="cardContainer">
              <div className="game-card-body">
                <div className="game-card-logo">
                  Cards <br />
                  Against <br />
                  Internet
                </div>
              </div>
            </div>
          </div>

          <div
            className="deckCardBeforeStartQ card questioncards"
            style={{ width: "18rem" }}
          >
            <div className="cardContainer">
              <div className="game-card-body">
                <div className="game-card-logo">
                  Cards <br />
                  Against <br />
                  Internet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionSection;
