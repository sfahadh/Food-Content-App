import React, { Component } from 'react'

export default class FoodSearch extends Component {

  render() {
    // console.log(this.props.nutrientContent)
    const {searchfood} = this.props
    return (
      <div>
        <form>
          <input placeholder="ENTER FOOD" 
            onChange={searchfood}
            ></input>
          <button>SEARCH</button>
        </form>
      </div>
    )
  }
}
