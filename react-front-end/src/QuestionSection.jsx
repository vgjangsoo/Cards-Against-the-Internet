import React, { Component } from "react";
import "./css/App.css";

class QuestionSection extends Component {
  render() {
    return (
      <div>
        <h4 className="questioner-header">Questioner's Cards</h4>
        <div className="d-flex flex-row justify-content-around">
          <div
            className="deckCardBeforeStartQ card questioncards"
            style={{ width: "18rem" }}
          >
            <div className="cardContainer">
              <div className="card-body">
                <div className="card-logo">
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
              <div className="card-body">
                <div className="card-logo">
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
              <div className="card-body">
                <div>
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
