import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }

    this.handleChatMessage = this.handleChatMessage.bind(this);
  }

  handleChatMessage(event) {
    event.preventDefault();
    const newMessage = event.target.msg.value;

    this.setState({ messages: [...this.state.messages, newMessage] });

    event.target.msg.value="";
  }

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
    
        {this.state.messages.map(e => {
            return (
              <p className="chat-message">{e}</p>
            )
          })}
        </div>
        <div className="d-flex flex-row justify-content-around">
          <form className="chat-form" onSubmit={this.handleChatMessage}>
          
          <div>
            <input type="chat-input" id="msg" className="form-control write_msg" placeholder="Let's chat!"></input>
          </div>
            <button type="submit" className="btn btn-dark btn-md p-1 chat-button">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;



