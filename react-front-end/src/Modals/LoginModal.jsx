import React, { Component } from 'react';
import axios from 'axios';
import '../login.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signUpClass: 'login-container',
      signUpActive: false,
    }
  }
  onSignUp = () => {
    this.setState({signUpActive: true});
  }

  onSignIn = () => {
    this.setState({signUpActive: false});
  }

  render() {
    const classState = this.state.signUpActive === true ? 'right-panel-active login-container' : 'login-container';

    return (
      <div className='bg-modal'>
        <div className='modal-contents'>
        <div className="login-body">
        <div className="close-button-div">

        <button className="btn btn-danger btn-sm close-button" onClick={this.props.onClose}>X</button>
        </div>

        <div className={`${classState}`}id ="container">
                    <div className="form-container sign-up-container">
                      <form action="#">
                        <h1 className="login-h1">Create Account</h1>
                        <div className="social-container">
                          <a className="login-a" href="#" className="social"><i className="fa fa-twitter login-icon"></i></a>
                          <a className="login-a" href="#" className="social"><i className="fa fa-facebook login-icon"></i></a>
                          <a className="login-a" href="#" className="social"><i className="fa fa-google-plus login-icon"></i></a>
                        </div>
                        <span className="login-span">or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="login-button" type="submit">Sign Up</button>
                      </form>
                    </div>
                    <div className="form-container sign-in-container">
                      <form action="#">
                        <h1 className="login-h1">Sign in</h1>
                        <div className="social-container">
                          <a className="login-a" href="#" className="social"><i className="fa fa-twitter login-icon"></i></a>
                          <a className="login-a" href="#" className="social"><i className="fa fa-facebook login-icon"></i></a>
                          <a className="login-a" href="#" className="social"><i className="fa fa-google-plus login-icon"></i></a>
                        </div>
                        <span className="login-span">or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a className="login-a" href="#" className="forgot-password">Forgot your password?</a>
                        <button className="login-button" type="submit">Sign In</button>
                      </form>
                    </div>
                    <div className="overlay-container">
                      <div className="overlay">
                        <div className="overlay-panel overlay-left">
                          <h1 className="login-h1">Welcome Back!</h1>
                          <p className="login-p">To keep connected with us please login with your personal info</p>
                          <button className="ghost login-button" id="signIn" onClick={this.onSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                          <h1 className="login-h1">Hello, Trolls!</h1>
                          <p className="login-p">Enter your personal details and show us how troll you are!</p>
                          <button className="ghost login-button" id="signUp" type="submit" onClick={this.onSignUp}>Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </div>

        </div>

        </div>
      </div> 
    );
  }
}

export default LoginModal;




