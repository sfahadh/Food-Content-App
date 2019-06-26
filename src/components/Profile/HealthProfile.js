import React, { Component } from 'react'
import './Profile.css';

export default class HealthProfile extends Component {
  constructor() {
    super()

    this.state = {
      weight: "",
      height: "",
      startingWeight: "",
      currentWeight: "",
      goalWeight: "",
      bodyFat: "",
      age: "",
      wthRatio: ""
    }
    this.handleHealthInput = this.handleHealthInput.bind(this);
  }

  handleHealthInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  storeHealthProfile() {
    localStorage.setItem("weight", this.state.weight)
    localStorage.setItem("height", this.state.height)
    localStorage.setItem("startingWeight", this.state.startingWeight)
    localStorage.setItem("currentWeight", this.state.currentWeight)
    localStorage.setItem("goalWeight", this.state.goalWeight)
    localStorage.setItem("bodyFat", this.state.bodyFat)
    localStorage.setItem("age", this.state.age)
    localStorage.setItem("wthRatio", this.state.wthRatio)
  }


  render() {
    this.storeHealthProfile()
    return (
      <div>
        <h1 id="healthTitle">Health Profile</h1>
        <div id="personalInfo">
          <form className="general health">
            <div className="bmi">
              <input 
                placeholder="Weight (lbs)"
                name="weight"
                onChange={this.handleHealthInput}></input>
              <input 
                placeholder="Starting Weight"
                name="startingWeight"
                onChange={this.handleHealthInput}></input>
              <input 
                placeholder="Body Fat %"
                name="bodyFat"
                onChange={this.handleHealthInput}></input>
            </div>
            <div>
              <input 
                placeholder="Height (in)"
                name="height"
                onChange={this.handleHealthInput}></input>
              <input 
                placeholder="Current Weight"
                name="currentWeight"
                onChange={this.handleHealthInput}></input>
              <input 
                placeholder="Age"
                name="age"
                onChange={this.handleHealthInput}></input>             
            </div>
            <div>
              <input 
                placeholder="Body Mass Index"></input>
              <input 
                placeholder="Goal Weight"
                name="goalWeight"
                onChange={this.handleHealthInput}></input>
              <input 
                placeholder="Waist-to-Hip Ratio"
                name="wthRatio"
                onChange={this.handleHealthInput}></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
