import React, { Component } from 'react'
import './Home.css'

export default class Intro extends Component {
  render() {
    return (
      <div id="home">
        <div id="intro">
          <h1>Nutrition Tracker (Prototype)</h1>
          <h3>Track your nutrient intake and set body composition goals</h3>
        </div>
        <h3 id="credit">Photo Credit: Cai Yang</h3>
      </div>
    )
  }
}
