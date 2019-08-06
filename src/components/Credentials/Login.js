import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      myUsername: "fahad",
      myPassword: "idk",
      isUsername: false,
      isPassword: false,
      open: true,
      isLoggedIn: false
    };
    this.validatePassword = this.validatePassword.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validateCredentials = this.validateCredentials.bind(this);
  }

  show = dimmer => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  validateUsername(e) {
    if (e.target.value === this.state.myUsername)
      this.setState({
        isUsername: true
      });
    this.validatePassword(e);
  }

  validatePassword(e) {
    if (e.target.value === this.state.myPassword)
      this.setState({
        isPassword: true
      });
  }

  validateCredentials(e) {
    e.preventDefault();
    if (!!this.state.isUsername && !!this.state.isPassword) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      alert("WRONG");
    }
  }

  loginButton(e) {
    e.preventDefault();
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/personal" />;
    }

    return (
      <div id="login-background">
        <div id="loginForm">
          <img
            id="logo-image"
            src={require("../../images/logo.png")}
            alt="profile"
          />
          <h2>Nutri Gainz</h2>
          <form className="login">
            <div className="loginFields">
              <input placeholder="username" onChange={this.validateUsername} />
              <input placeholder="password" onChange={this.validatePassword} />
              <button onClick={this.validateCredentials}>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
