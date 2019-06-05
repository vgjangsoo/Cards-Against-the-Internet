import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/UserNotLoggedIn.css"

class UserNotLoggedIn extends Component {

  render() {

    return (
      <div className="UserNotLoggedIn">
        <img className='page-img' src="http://depp5bqkz634d.cloudfront.net/car-manager/demo3/wp-content/themes/car-manager/images/not-login-icon.png" alt="Not-logged-in" style={{width: "100%", height: "100%"}}/>
        <br/>
        <br/>
        <h2 className="page-header">Please Login.</h2>
        <hr/>
        <h5><Link className="link-to-home btn" to="/" style={{textDecoration: 'none'}}> Cards Against Internet</Link> </h5>
      </div>
    );
  }
}

export default UserNotLoggedIn;

