import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import {Route,Link} from "react-router-dom"
import Home from "./components/Home/Intro"
import Articles from "./components/Articles/Articles"
import FoodContent from "./components/FoodTracker/FoodContent"
import Personal from "./components/Profile/Personal"

const apiKey = process.env.REACT_APP_USDA_DATABASE_API_KEY;
// const nutrients = "nutrient=2";
class App extends Component {
  constructor() {
    super()
    this.state = {
      nutrientContent: []
    }
    this.fetchFoodData = this.fetchFoodData.bind(this);
  }

  fetchFoodData() {
    fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${apiKey}&nutrients=204&nutrients=208&nutrients=269`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          nutrientContent: data.report.foods.map(food => food)
        })
      })
      .catch(error => error.message);
  }

  render() {
    const {nutrientContent} = this.state;
    return (
      <div>
        <nav>
          <h2>Nutrition Thermodynamics</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="articles">Articles</Link></li>
            <li><Link to="food-tracker">Food Tracker</Link></li>
            <li><Link to="profile">Profile</Link></li>
          </ul>
        </nav>
        
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path="/articles" component={Articles}></Route>
          <Route path="/food-tracker" 
            render={() => <FoodContent 
            nutrientContent={nutrientContent}
            fetchFoodData={this.fetchFoodData}/>}>
          </Route>
          <Route path="/profile" component={Personal}></Route>
        </main>
      </div>
    );
  }
}

export default App;
