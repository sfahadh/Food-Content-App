import React, { Component } from 'react'
import './Profile.css';

export default class HealthProfile extends Component {
  render() {
    return (
      <div>
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
