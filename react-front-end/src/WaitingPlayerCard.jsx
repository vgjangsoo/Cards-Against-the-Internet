import React, { Component } from 'react';
import './css/App.css';

class WaitingPlayerCard extends Component {
    render(){
      return(
      <div className="deckCardBeforeStart card answer-card" style={{width: "18rem"}}>
      <div className='cardContainer'>
        <div className="card-body">
        <img className='card-img' src="http://www.pngall.com/wp-content/uploads/2016/06/Kanye-West-PNG-Pic.png" alt="Avatar" style={{width: "100%", height: "100px"}}/>
          <div className='player-name-section'>
            <h6 className="answerer-status answerer-status1">Waiting to Select</h6>
          </div>
          <div className='player-status-section'>
            <h6 className="answerer-status answerer-status2">Waiting...</h6>
          </div>
        </div>
      </div>
      </div>
      );
    }
}

export default WaitingPlayerCard;
