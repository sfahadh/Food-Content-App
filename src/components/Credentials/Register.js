import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <h2>Login:</h2>
        <form className="login">
          <div className="loginFields">
            <input placeholder="username" onChange={this.validateUsername} />
            <input placeholder="password" onChange={this.validatePassword} />
            <button onClick={this.validateCredentials}>LOGIN</button>
          </div>
        </form>
      </div>
    );
  }
}
