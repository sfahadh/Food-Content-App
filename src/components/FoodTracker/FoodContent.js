import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"

export default class FoodContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchFood: ""
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }
  
  handleSearchInput(e) {
    this.setState({
    searchFood: e.target.value
    })
    console.log(e.target.value)
  }


  render() {
    const {nutrientContent, fetchFoodData} = this.props
    // let foodNames = nutrientContent.map(names => names.name);
    // console.log(foodNames[0])
    // let nutrientInfo = nutrientContent.map(nutrients => nutrients.nutrients)
    // console.log(nutrientInfo[0]);
    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          searchfood={this.handleSearchInput}
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
      </div>
    )
  }
}
