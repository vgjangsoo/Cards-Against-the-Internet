import React, { Component } from "react";
import axios from 'axios';
import "../css/submitform.css";
import { API_ROOT, API_WS_ROOT, HEADERS, loadingGameState } from "../constants";

class LeaderboardModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leader: []
    };
  }

  componentDidMount() {
    axios.get(`${API_ROOT}/users`).then(res => {
      this.setState({
        leader: res.data
      })
    })
  }


  render() {
    const allUsers = this.state.leader.sort(function(a, b) { return a.leaderboardPoints - b.leaderboardPoints })

    return (
      <div className="bg-modal">
        <div className="modal-contents-room">
        <button className="btn btn-danger btn-sm idea-close-button" onClick={this.props.closeLeaderModal}>X</button>
          <form className="idea-form">
            <h2 className="idea-h2 mb-3">Leaderboard</h2>
            <div className="row">
              <ol>
                  {allUsers.map(e => {
                    return (
                      <li key={e.id} >{e.username} : {e.leaderboardPoints}</li>
                    )
                  })}
              </ol>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LeaderboardModal;
