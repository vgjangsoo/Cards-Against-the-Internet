import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import "./css/UserNotLoggedIn.css"

class UserNotLoggedIn extends Component {

  render() {

    return (
      <div className="UserNotLoggedIn">
        <img className='card-img answerer-img' src="http://depp5bqkz634d.cloudfront.net/car-manager/demo3/wp-content/themes/car-manager/images/not-login-icon.png" alt="Not-logged-in" style={{width: "100%", height: "100%"}}/>
        <br/>
        <br/>
        <h2>Please Login.</h2>
        <hr/>
        <h5 className="text-white"><Link className="navbar-logo responsive-logo" to="/"> Cards Against Internet</Link> </h5>
      </div>
    );
  }
}

export default UserNotLoggedIn;

