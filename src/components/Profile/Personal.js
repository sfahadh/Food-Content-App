import React, { Component } from "react";
import "./Profile.css";

export default class Personal extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      dateOfBirth: "",
      streetAddress: ""
    };
    this.handleProfileInput = this.handleProfileInput.bind(this);
  }

  handleProfileInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  storePersonalInfo() {
    localStorage.setItem("firstName", this.state.firstName);
    localStorage.setItem("lastName", this.state.lastName);
    localStorage.setItem("emailAddress", this.state.emailAddress);
    localStorage.setItem("phoneNumber", this.state.phoneNumber);
    localStorage.setItem("dateOfBirth", this.state.dateOfBirth);
    localStorage.setItem("streetAddress", this.state.streetAddress);
  }

  render() {
    this.storePersonalInfo();
    return <div id="profile-background" />;
  }
}
