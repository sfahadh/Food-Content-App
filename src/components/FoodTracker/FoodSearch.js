import React, { Component } from 'react'

export default class FoodSearch extends Component {

  render() {
    // console.log(this.props.nutrientContent)
    const {searchfood, foodData} = this.props
    return (
      <div>
        <form>
          <input placeholder="ENTER FOOD" onChange={searchfood}></input>
          <button onClick={foodData}>SEARCH</button>
        </form>
      </div>
    )
  }
}
