import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"
import {Link} from "react-router-dom"

export default class FoodContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foodNames: [],
      selectFood: {
        nutrients: [
          {calories: 0},
          {protein: 0},
          {carbs: 0},
          {fats: 0},
        ]
      }
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(e) {
    console.log(e.target.value)
    let filteredFood = this.props.nutrientContent.filter(searchedFood => {
      return searchedFood.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({
      foodNames: filteredFood
    })
  }

  displayTable(table) {
    return table;
  }

  displayFoodData = (e, table) => {
    for(let i = 0; i < this.state.foodNames.length; i++) {
      if(this.state.foodNames[i].name.includes(e.target.textContent)) {
        this.setState({
          selectFood: this.state.foodNames[i]
        })
        this.displayTable(table);
        break;
      }
    }
  }

  render() {
    const {nutrientContent} = this.props
    const {foodNames, selectFood} = this.state
    console.log(selectFood)
    console.log(selectFood[0])
    console.log(selectFood.weight)

    let table = (
      <div className="nutrition-content">
        <div className="box left">Nutrient</div>
        <div className="box">Unit</div>
        <div className="box">Weight</div>
        <div className="box">Value</div>

        <div className="box left">Energy</div>
        <div className="box">kcal</div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{selectFood.weight}</p>})()}
        </div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{selectFood.nutrients[0].value}</p>})()}
        </div>

        <div className="box left">Protein</div>
        <div className="box">g</div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round((selectFood.nutrients[1].value)) * 4) / 4}</p>})()}
        </div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round(selectFood.nutrients[1].value)) * 4}</p>})()}
        </div>

        <div className="box left">Carbohydrate</div>
        <div className="box">g</div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round((selectFood.nutrients[3].value)) * 4) / 4}</p>})()}
        </div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round(selectFood.nutrients[3].value)) * 4}</p>})()}
        </div>

        <div className="box left bottom">Fat</div>
        <div className="box bottom">g</div>
        <div className="box bottom">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round((selectFood.nutrients[2].value)) * 9) / 9}</p>})()}
        </div>
        <div className="box bottom">{(() => {if(selectFood !== undefined) 
          return <p>{parseInt(Math.round(selectFood.nutrients[2].value)) * 9}</p>})()}
        </div>
      </div>
    )

    return (
      <div>
        <FoodSearch 
          nutrientContent={nutrientContent} 
          searchfood={this.handleSearchInput}
          foodNames={foodNames}
          selectFood={selectFood}
        />
        {this.displayTable(table)}
        {
          foodNames.map(foodName => {
          return <li id="food-name" key={foodName.ndbno}>
            <Link 
              to={`/food-tracker/${foodName.ndbno}`}
              onClick={(e) => {
                e.preventDefault();
                return this.displayFoodData(e, table)}
              }
            >{foodName.name}</Link></li>
          })
        } 
      </div>
    )
  }
}
