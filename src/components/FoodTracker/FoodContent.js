import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"

export default class FoodContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foodName: ""
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }
  
  handleSearchInput(e) {
    console.log(e.target.value)
    this.setState({
      foodName: e.target.value
    })
  }

  findFood() {
    let foodList = this.props.nutrientContent.map(names => names.name);
    // console.log(foodNames)
    // for(let food in foodList) {
      if(this.state.foodName === foodList) {
        console.log(this.state.foodName)
      } else {
        console.log("ERROR! Wrong food")
      }
    // }
    // console.log(foodNames)
    // let nutrientInfo = nutrientContent.map(nutrients => nutrients.nutrients)
    // console.log(nutrientInfo[0]);
  }

  render() {
    this.findFood();
    const {nutrientContent, fetchFoodData} = this.props
    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          // searchfood={this.handleSearchInput}
          foodData={fetchFoodData}
        />
        <div className="nutrition-content">
            <div className="box left">Nutrient</div>
            <div className="box">Unit</div>
            <div className="box">Weight</div>
            <div className="box">Value</div>

            <div className="box left">Energy</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box">-</div>

            <div className="box left">Protein</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box">-</div>

            <div className="box left">Carbohydrate</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box">-</div>

            <div className="box left bottom">Fat</div>
            <div className="box bottom">-</div>
            <div className="box bottom">-</div>
            <div className="box bottom">-</div>
        </div>
        {
          nutrientContent.map(foodNames =>
            <li id="food-name" key={foodNames.ndbno}>{foodNames.name}</li>)
        }
      </div>
    )
  }
}
