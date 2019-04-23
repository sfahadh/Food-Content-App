import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"
import {Link} from "react-router-dom"

export default class FoodContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foodName: []
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(e) {
    console.log(e.target.value)
    let filteredFood = this.props.nutrientContent.filter(searchedFood => {
      return searchedFood.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      foodName: filteredFood
    })
  }

  displayFood(table) {
    if(this.state.foodName.length === 1) {
      return table
    } else {
      console.log("too many foods")
    }
  }

  render() {
    console.log(this.props)
    const {nutrientContent} = this.props
    let table = (
    <div className="nutrition-content">
      <div className="box left">Nutrient</div>
      <div className="box">Unit</div>
      <div className="box">Weight</div>
      <div className="box">Value</div>

      <div className="box left">Energy</div>
      <div className="box">kcal</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{this.state.foodName[0].weight}</p>})()}</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{this.state.foodName[0].nutrients[0].value}</p>})()}</div>

      <div className="box left">Protein</div>
      <div className="box">g</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round((this.state.foodName[0].nutrients[1].value)) * 4) / 4}</p>})()}</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round(this.state.foodName[0].nutrients[1].value)) * 4}</p>})()}</div>

      <div className="box left">Carbohydrate</div>
      <div className="box">g</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round((this.state.foodName[0].nutrients[3].value)) * 4) / 4}</p>})()}</div>
      <div className="box">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round(this.state.foodName[0].nutrients[3].value)) * 4}</p>})()}</div>

      <div className="box left bottom">Fat</div>
      <div className="box bottom">g</div>
      <div className="box bottom">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round((this.state.foodName[0].nutrients[2].value)) * 9) / 9}</p>})()}</div>
      <div className="box bottom">{(() => {if(this.state.foodName[0] !== undefined) 
      return <p>{parseInt(Math.round(this.state.foodName[0].nutrients[2].value)) * 9}</p>})()}</div>
    </div>)

    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          searchfood={this.handleSearchInput}
        />
        
          {this.displayFood(table)}


        {
          this.state.foodName.map(foodNames => {
          return <li id="food-name" key={foodNames.ndbno}>
            <Link to={`/food-tracker/${foodNames.ndbno}`}>{foodNames.name}</Link></li>})
        } 
      </div>
    )
  }
}
