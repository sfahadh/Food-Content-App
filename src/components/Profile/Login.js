import React, { Component } from 'react'
import './Profile.css';
import Personal from "./Personal"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            myUsername: "fahad",
            myPassword: "idk"
        }
        // this.handleLoginCredentials = this.handleLoginCredentials.bind(this)
    }

    verifyLoginCredentials() {
        
    }

    // handleLoginCredentials(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // }

    // storeloginCredentials() {
    //     localStorage.setItem("username", this.state.username)
    //     localStorage.setItem("password", this.state.password)
    //     console.log(this.state.username)
    //     console.log(this.state.password)
    // }

    loginButton(e) {
        e.preventDefault();
    }

  render() {
    //   this.storeloginCredentials();
    return (
      <div>
        <h2>Login:</h2>
        <form className="login">
            <div className="loginFields">
                <input 
                    placeholder="username"
                    // value={this.state.username} //use for register
                    // name="username"
                    // onChange={this.handleLoginCredentials}
                ></input>
                <input 
                    placeholder="password"
                    // value={this.state.password} //use for register
                    // name="password"
                    // onChange={this.handleLoginCredentials}
                ></input>
                <button onClick={this.loginButton}>LOGIN</button>
            </div>
          </form>
          <Personal/>
      </div>
    )
  }
}
