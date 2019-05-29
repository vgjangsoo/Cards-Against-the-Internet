import React, { Component } from 'react';
import './App.css';

class QuestionSection extends Component {
  render() {
    
    return (
      <div>
        <h4>Questioner's Cards</h4>
        <div className='d-flex flex-row justify-content-around'>
          
          <div className="deckCardBeforeStartQ card questioncards" style={{width: "18rem"}}>
            <div className='cardContainer'>
              <div className="card-body">
                <div>Cards <br/>
                  Against the <br/>
                  Internet
                </div>
              </div>
            </div>
          </div>

          <div className="deckCardBeforeStartQ card questioncards" style={{width: "18rem"}}>
            <div className='cardContainer'>
              <div className="card-body">
                <div>Cards <br/>
                  Against the <br/>
                  Internet
                </div>
              </div>
            </div>
          </div>

          <div className="deckCardBeforeStartQ card questioncards" style={{width: "18rem"}}>
            <div className='cardContainer'>
              <div className="card-body">
                <div>Cards <br/>
                  Against the <br/>
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