import React, { Component } from 'react'
import './Profile.css';
import HealthProfile from "./HealthProfile"

export default class Personal extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      datOfBirth: "",
      streetAddress: ""
    }
  }

  handleUsersInput(e) {
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      emailAddress: e.target.value,
      phoneNumber: e.target.value,
      datOfBirth: e.target.value,
      streetAddress: e.target.value
    })
  }

  render() {
    return (
      <div className="infoProfile">
        <h1>Personal Info</h1>
        <div id="personalInfo">
          <img src={require("./profilePic.png")} alt="profile"></img>
          <form className="general">
            <div className="names">
              <input placeholder="First Name" onChange={this.handleUsersInput}></input>
              <input placeholder="Last Name" onChange={this.handleUsersInput}></input>
            </div>
            <div>
              <input placeholder="Email Address" onChange={this.handleUsersInput}></input>
              <input placeholder="Phone Number" onChange={this.handleUsersInput}></input>
            </div>
            <div>
              <input placeholder="Date of Birth" onChange={this.handleUsersInput}></input>
              <input placeholder="Street Address" onChange={this.handleUsersInput}></input>
            </div>
          </form>
        </div>
       <HealthProfile />
      </div>
    )
  }
}