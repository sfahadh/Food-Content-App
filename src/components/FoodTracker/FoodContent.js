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

  // findFood() {
  //   let foodList = this.props.nutrientContent.map(names => names.name);
  //   // console.log(foodNames)
  //   // for(let food in foodList) {
  //     if(this.state.foodName === foodList) {
  //       console.log(this.state.foodName)
  //     } else {
  //       console.log("ERROR! Wrong food")
  //     }
  //   // }
  //   // console.log(foodNames)
  //   // let nutrientInfo = nutrientContent.map(nutrients => nutrients.nutrients)
  //   // console.log(nutrientInfo[0]);
  // }

  handleSearchInput(e) {
    console.log(e.target.value)
    let filteredFood = this.props.nutrientContent.map(food => food.name).filter(searchedFood => {
      return searchedFood.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      foodName: filteredFood
    })
  }

  render() {
    // console.log(this.props.nutrientContent.map(food => food.name))
    // .indexOf(this.state.foodName !== -1);
    // this.findFood();
    const {nutrientContent, fetchFoodData} = this.props
    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          searchfood={this.handleSearchInput}
        />
        {
          nutrientContent.map(foodNames => {
          return <li id="food-name" key={foodNames.ndbno}>{this.state.foodName}</li>})
        }
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
