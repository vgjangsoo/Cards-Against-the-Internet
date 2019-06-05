import React, { Component } from "react";
import axios from "axios";
import "./css/NoGameroom.css";
import Game from "./Game.jsx";

class NoGameroom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {


    return (
      <div className="noGame-container">
        <div className="noGame-header">
            
        </div>
        <div className="noGame-body">
            <div className="noGame-body1"> 
                <h1 className="noGame-body1-content">?</h1>
            </div>
            <div className="noGame-body2">
                <h1 className="noGame-body2-content">Oops! There is no room. Create one!</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default NoGameroom;
