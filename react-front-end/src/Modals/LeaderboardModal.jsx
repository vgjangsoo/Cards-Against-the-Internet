import React, { Component } from "react";
import axios from "axios";
import "../css/submitform.css";
import { API_ROOT, API_WS_ROOT, HEADERS, loadingGameState } from "../constants";

class LeaderboardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leader: []
    };
  }

  componentDidMount() {
    axios.get(`${API_ROOT}/users`).then(res => {
      this.setState({
        leader: res.data
      });
    });
  }

  render() {
    const allUsers = this.state.leader.sort(function(a, b) {
      return b.leaderboardPoints - a.leaderboardPoints;
    });

    return (
      <div className="bg-modal">
        <div className="modal-contents-room leader-modal">
          <button
            className="btn btn-danger btn-sm idea-close-button"
            onClick={this.props.closeLeaderModal}
          >
            X
          </button>
          <h2 className="leader-title">Leaderboard</h2>
          <table className="leader-table">
            <tbody>
              <tr>
                <th className="table-th">Username</th>
                <th className="table-th table-points">Points</th>
              </tr>
              {allUsers.map(e => {
                return (
                  <tr>
                    <th key={e.id}>
                      {" "}
                      {e.username}{" "}
                    </th>
                    <td>{e.leaderboardPoints}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LeaderboardModal;



/* <form className="idea-form" action="#">
            <h2 className="idea-h2 mb-3">Leaderboard</h2>
            <table className="table">
                <tread>
                  <th scope="col">User Name</th>
                  <th scope="col">Score</th>
                </tread>
                  {allUsers.map(e => {
                    return (
                        <tbody className="leader-table-inside leader-table">
                          <td key={e.id} className="text-left"> {e.username} </td>
                          <td className="text-right">{e.leaderboardPoints}</td> 
                        </tbody>
                    )
                  })}
            </table>
          </form> */
