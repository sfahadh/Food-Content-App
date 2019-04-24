import React, { Component } from 'react'
import './Profile.css';
import {Button, Form} from "semantic-ui-react"

export default class Personal extends Component {
  render() {
    return (
      <div className="infoProfile">
        <h1>Personal Info</h1>
        <div id="personalInfo">
          <img src={require("./profilePic.png")}></img>
          <form className="general">
            <div className="names">
              <input placeholder="First Name"></input>
              <input placeholder="Last Name"></input>
            </div>
            <div>
              <input placeholder="Email Address"></input>
              <input placeholder="Phone Number"></input>
            </div>
            <div>
              <input placeholder="Date of Birth"></input>
              <input placeholder="Street Address"></input>
            </div>
          </form>
        </div>
       
        <h1 id="healthTitle">Health Profile</h1>
        <div id="personalInfo">
          <form className="general health">
            <div className="bmi">
              <input placeholder="Weight (lbs)"></input>
              <input placeholder="Starting Weight"></input>
              <input placeholder="Body Fat %"></input>
            </div>
            <div>
              <input placeholder="Height (in)"></input>
              <input placeholder="Current Weight"></input>
              <input placeholder="Age"></input>
            </div>
            <div>
              <input placeholder="Body Mass Index"></input>
              <input placeholder="Goal Weight"></input>
              <input placeholder="Waist-to-Hip Ratio"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}