import React, { Component } from 'react'
import "./Articles.css"

export default class Articles extends Component {
  render() {
    return (
      <div id="article-background">
        <div className="articleCard">
          <h1>The Basis of All Diets: Energy Conservation</h1>
          <div className="articleSummary">
            <img src={require("./FoodScience2.png")} alt=""/>
            <p>This article goes into depth about about Total Daily Energy Expenditure and its components.     It ties into how it relates the universal law that governs physical nature, which is the       1st law of Thermodynamics. Understanding this basic concept will give you the knowledge on     how all diets work giving you the advantage in knowing how to manipulate your own weight.
                <button><a href="https://fahadhussain-fitnessblog.netlify.com/pages/firstarticle">Read More</a></button></p>
          </div>
        </div>

        <div className="articleCard">
          <h1>Heart Rate Variability and It's Role with the Autonomic Nervous System</h1>
          <div className="articleSummary">
            <img src={require("./heartRate.jpg")} alt=""/>
            <p>Heart rate Variability (HRV) is distance between the peak of the QRS wave to the next, also    known as the R-R interval. In a normal healthy heart, there should be Variability in time      of the heartbeats because it shows that it is responding to internal and external              stressors. HRV can be used to track recovery (great for athletes to prevent overtraining)      and how healthy your heart is.
              <button><a href="https://fahadhussain-fitnessblog.netlify.com/pages/secondarticle">Read More</a></button></p>
          </div>
        </div>
      </div>
    )
  }
}
