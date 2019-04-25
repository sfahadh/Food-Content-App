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

    let table = (
      <div className="nutrition-content">
        <div className="box left top">Nutrient</div>
        <div className="box top">Unit</div>
        <div className="box top">Weight (g)</div>
        <div className="box top">Value</div>

        <div className="box left">Energy</div>
        <div className="box">kcal</div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{selectFood.weight}</p>})()}
        </div>
        <div className="box">{(() => {if(selectFood !== undefined) 
          return <p>{selectFood.nutrients[0].value}</p>})()}
        </div>

        <div className="box left">Protein</div>
        <div className="box">grams</div>
        <div className="box">{(() => {
          if(selectFood.nutrients[1].value !== undefined) {
            return (parseInt(selectFood.nutrients[1].value !== typeof 1) || selectFood.nutrients[1].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[1].value)) * 4) / 4}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>
        <div className="box">{(() => {
          if(selectFood.nutrients[1].value !== undefined) {
            return (parseInt(selectFood.nutrients[1].value !== typeof 1) || selectFood.nutrients[1].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[1].value)) * 4)}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>

        <div className="box left">Carbohydrate</div>
        <div className="box">grams</div>
        <div className="box">{(() => {
          if(selectFood.nutrients[3].value !== undefined) {
            return (parseInt(selectFood.nutrients[3].value !== typeof 1) || selectFood.nutrients[3].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[3].value)) * 4) / 4}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>
        <div className="box">{(() => {
          if(selectFood.nutrients[3].value !== undefined) {
            return (parseInt(selectFood.nutrients[3].value !== typeof 1) || selectFood.nutrients[3].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[3].value)) * 4)}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>

        <div className="box left bottom">Fat</div>
        <div className="box bottom">grams</div>
        <div className="box bottom">{(() => {
          if(selectFood.nutrients[2].value !== undefined) {
            return (parseInt(selectFood.nutrients[2].value !== typeof 1) || selectFood.nutrients[2].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[2].value)) * 9) / 9}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>
        <div className="box bottom">{(() => {
          if(selectFood.nutrients[2].value !== undefined) {
            return (parseInt(selectFood.nutrients[2].value !== typeof 1) || selectFood.nutrients[2].value === '--') ? <p>0</p> :
              <p>{parseInt(Math.round((selectFood.nutrients[2].value)) * 9)}</p> 
          } else {
            return <p></p>
          }
        })()}
        </div>
        <div id="food"><span>Selected: </span>{selectFood.name}</div>
      </div>
    )

    return (
      <div id="foodTracker-background">
        {this.props.loading ? <h2 id="loading">Fetching Data...</h2> : ""}
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
              style={{color: 'orange'}}
              to={`/food-tracker/${foodName.ndbno}`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
                return this.displayFoodData(e, table)}
              }
            >{foodName.name}</Link></li>
          })
        } 
      </div>
    )
  }
}
