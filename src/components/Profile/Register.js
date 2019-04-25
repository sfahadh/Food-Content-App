import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
        <div>
            <h2>Login:</h2>
            <form className="login">
                <div className="loginFields">
                    <input 
                        placeholder="username"
                        // value={this.state.username} //use for register
                        // name="username"
                        onChange={this.validateUsername}
                    ></input>
                    <input 
                        placeholder="password"
                        // value={this.state.password} //use for register
                        // name="password"
                        onChange={this.validatePassword}
                    ></input>
                    <button onClick={this.validateCredentials}>LOGIN</button>
                </div>
            </form>
            <Personal/>
        </div>
    )
  }
}
