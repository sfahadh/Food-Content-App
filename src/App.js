import React, { Component } from 'react';
import './App.css';
import {Route, Link} from "react-router-dom"
import Home from "./components/Home/Intro"
import Articles from "./components/Articles/Articles"
import FoodContent from "./components/FoodTracker/FoodContent"
import Login from "./components/Profile/Login"
import Personal from "./components/Profile/Personal"

class App extends Component {
  constructor() {
    super()
    this.state = {
      nutrientContent: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${process.env.REACT_APP_USDA_DATABASE_API_KEY}&nutrients=205&nutrients=203&nutrients=208&nutrients=204`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          nutrientContent: data.report.foods.map(food => food),
          loading: false
        })
      })
      .catch(error => error.message);
  }

  render() {
    const {nutrientContent, loading} = this.state;
    return (
      <div>
        <nav>
          <h2 id="brand"><em>Nutri-Gainz</em></h2>
          <ul>
            <li><Link style={{color: 'orange'}} to="/">Home</Link></li>
            <li><Link style={{color: 'orange'}} to="articles">Articles</Link></li>
            <li><Link style={{color: 'orange'}} to="food-tracker">Food Tracker</Link></li>
            <li><Link style={{color: 'orange'}}to="profile">Profile</Link></li>
          </ul>
        </nav>
        
        <main>
          <Route exact path="/" component={Home}></Route>
          <Route path="/articles" component={Articles}></Route>
          <Route path="/food-tracker" 
            render={() => <FoodContent 
            nutrientContent={nutrientContent}
            loading={loading}/>}>
          </Route>
          <Route exact path="/profile" component={Login}></Route>
          <Route exact path="/profile/personal" component={Personal}></Route>
        </main>
      </div>
    );
  }
}

export default App;
