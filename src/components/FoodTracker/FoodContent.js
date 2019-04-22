import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"

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

  render() {
    const {nutrientContent, fetchFoodData} = this.props
    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          searchfood={this.handleSearchInput}
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
          this.state.foodName.map(foodNames => {
          return <li id="food-name" key={foodNames.ndbno}>{foodNames.name}</li>})
        }
      </div>
    )
  }
}
