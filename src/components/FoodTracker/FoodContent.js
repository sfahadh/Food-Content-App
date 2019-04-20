import React, { Component } from 'react'
import FoodSearch from "./FoodSearch"

export default class FoodContent extends Component {
  render() {
    return (
      <div>
        <FoodSearch />
        <div className="nutrition-content">
            <div className="box">Nutrient</div>
            <div className="box">Unit</div>
            <div className="box">Weight</div>
            <div className="box">Energy</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box">Protein</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box">Carbohydrate</div>
            <div className="box">-</div>
            <div className="box">-</div>
            <div className="box bottom">Fat</div>
            <div className="box bottom">-</div>
            <div className="box bottom">-</div>
        </div>
      </div>
    )
  }
}
