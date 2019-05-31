import React, { Component } from 'react';
import './App.css';

class AnswerSection extends Component {
  render() {
    console.log('ANSWERSECTION PROPS', this.props)
    let currentQuestioner = this.props.currentQuestioner
    // return null;
    return (
      <div>
        <h4>Players</h4>
        <div className=' answerers-cards'>
          <div className='d-flex flex-row justify-content-around'>
            {this.props.userStatus.users.map(e => {
              if (currentQuestioner !== e.id){
                return (
                  <div className="deckCardBeforeStart card answer-card" style={{width: "18rem"}}>
                    <div className='cardContainer'>
                      <div className="card-body">
                      <img className='card-img' src="https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png" alt="Avatar" style={{width: "100%", height: "100px"}}/>
                        <div className='player-name-section'>
                          <h6>Player ID: {e.id}</h6>
                        </div>
                        <div className='player-status-section'>
                          <h6>{e.status}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )

              }
            })}


          </div>
        </div> 
      </div>
    );
  }
}

export default AnswerSection;

// kanye player box
{/* <div className="deckCardBeforeStart card answer-card" style={{width: "18rem"}}>
<div className='cardContainer'>
  <div className="card-body">
  <img className='card-img' src="http://www.pngall.com/wp-content/uploads/2016/06/Kanye-West-PNG-Pic.png" alt="Avatar" style={{width: "100%", height: "100px"}}/>
    <div className='player-name-section'>
      <h6>Player 4</h6>
    </div>
    <div className='player-status-section'>
      <h6>Waiting...</h6>
    </div>
  </div>
</div>
</div> */}

// regular player box
{/* <div className="deckCardBeforeStart card answer-card" style={{width: "18rem"}}>
<div className='cardContainer'>
  <div className="card-body">
  <img className='card-img' src="https://cdn2.iconfinder.com/data/icons/player-rounded-set/154/user-login-player-function-name-avatar-512.png" alt="Avatar" style={{width: "100%", height: "100px"}}/>
    <div className='player-name-section'>
      <h6>Player 3</h6>
    </div>
    <div className='player-status-section'>
      <h6>Waiting...</h6>
    </div>
  </div>
</div>
</div> */}

