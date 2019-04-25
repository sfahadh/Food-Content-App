import React, { Component } from 'react'
import './Profile.css';
import HealthProfile from "./HealthProfile"
import Login from "./Login"

export default class Personal extends Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      dateOfBirth: "",
      streetAddress: ""
    }
    this.handleProfileInput = this.handleProfileInput.bind(this);
  }

  handleProfileInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  

  storePersonalInfo() {
    localStorage.setItem("firstName", this.state.firstName)
    localStorage.setItem("lastName", this.state.lastName)
    localStorage.setItem("emailAddress", this.state.emailAddress)
    localStorage.setItem("phoneNumber", this.state.phoneNumber)
    localStorage.setItem("dateOfBirth", this.state.dateOfBirth)
    localStorage.setItem("streetAddress", this.state.streetAddress)
  }

  render() {
    this.storePersonalInfo()
    return (
      <div id="profile-background">
      {/* <Login/> */}
        <div className="infoProfile">
          <h1>Personal Info</h1>
          <div id="personalInfo">
            <img src={require("./profilePic.png")} alt="profile"></img>
            <form className="general">
              <div className="names">
                <input 
                  placeholder="First Name" 
                  name='firstName' 
                  onChange={this.handleProfileInput}>
                </input>
                <input 
                  placeholder="Last Name" 
                  name='lastName' 
                  onChange={this.handleProfileInput}>
                </input>
              </div>

              <div>
                <input 
                  placeholder="Email Address" 
                  name='emailAddress' 
                  onChange={this.handleProfileInput}>
                </input>
                <input 
                  placeholder="Phone Number" 
                  name='phoneNumber' 
                  onChange={this.handleProfileInput}>
                </input>
              </div>

              <div>
                <input 
                  placeholder="Date of Birth" 
                  name='dateOfBirth' 
                  onChange={this.handleProfileInput}>
                </input>
                <input 
                  placeholder="Street Address" 
                  name='streetAddress' 
                  onChange={this.handleProfileInput}>
                </input>
              </div>

            </form>
          </div>
        <HealthProfile />
        </div>
      </div>
    )
  }
}