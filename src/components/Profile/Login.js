import React, { Component } from 'react'
import './Profile.css';
import {Redirect} from "react-router-dom"

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            myUsername: "fahad",
            myPassword: "idk",
            isUsername: false,
            isPassword: false,
            open: true,
            isLoggedIn: false
        }
        // this.handleLoginCredentials = this.handleLoginCredentials.bind(this)
        this.validatePassword = this.validatePassword.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateCredentials = this.validateCredentials.bind(this);
    }

    show = dimmer => () => this.setState({ dimmer, open: true })
    
    close = () => this.setState({ open: false })

    validateUsername(e) {
        if(e.target.value === this.state.myUsername) 
            this.setState({
                isUsername: true
            })
            this.validatePassword(e);
    }

    validatePassword(e) {
        if(e.target.value === this.state.myPassword) 
            this.setState({
                isPassword: true
            })
    }

    validateCredentials(e) {
        e.preventDefault();
        if(!!this.state.isUsername && !!this.state.isPassword) {
            alert("LOGIN")
            this.setState({
                isLoggedIn: true
            })
        } else {
            alert("WRONG");
        }
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
    if(this.state.isLoggedIn) {
        return <Redirect to="/profile/personal"/>
    }
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
          {/* <Personal/> */}
          <div>
      </div>
      </div>
    )
  }
}
