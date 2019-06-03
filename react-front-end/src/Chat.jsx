import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

class Chat extends Component {

  render() {
    console.log("FROM CHAT.jsx: ", this.props.userInfo.users);
    const users = this.props.userInfo.users;
    return (
      <div className="p-2 chat-box">
        <div className="score-board">
          <h6 className='score-title'>Score Board</h6>
          <hr/>
          {users.map(e => {
            return (
              <h6 key={e.id} className='player-name'>Player #{e.id}: {e.roundPoints}</h6>
            )
          })}
        </div>
        <h5>Chat</h5>

        <div className="incoming-msg">

        </div>
        <div className="d-flex flex-row justify-content-around">
          <input type="chat-input" id="cha-input" className="form-control write_msg" placeholder="Let's chat!"></input>
          <button className="btn btn-dark btn-md p-1">
            Send
          </button>
          <button className='btn-md btn btn-dark p-1'> 😀</button>
        </div>
      </div>
    );
  }
}

export default Chat;