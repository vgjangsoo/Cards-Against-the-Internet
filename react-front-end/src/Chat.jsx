import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

class Chat extends Component {

  render() {
    console.log("FROM CHAT.jsx: ", this.props);
    const users = this.props.userInfo.users;
    return (
      <div className="p-2 chat-box">
        <div className="score-board">
          <h6 className='score-title'>Score Board</h6>
          <hr/>
          {users.map(e => {
            return (
              <h6 key={e.id} className='player-name'>{e.username}: {e.roundPoints}</h6>
            )
          })}
        </div>
        <h5 className="chat-header">Chat</h5>

        <div className="incoming-msg">

        </div>
        <div className="d-flex flex-row justify-content-around">
          <div>
            <input type="chat-input" id="cha-input" className="form-control write_msg" placeholder="Let's chat!"></input>
          </div>
            <button className="btn btn-dark btn-md p-1 chat-button">
              Send
            </button>
          <button className='btn-md btn btn-dark p-1 chat-button'> 😀</button>
        </div>
      </div>
    );
  }
}

export default Chat;