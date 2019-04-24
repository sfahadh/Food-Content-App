import React, { Component } from 'react'
export default class FoodSearch extends Component {

  render() {
    return (
      <div>
        <form>
          <input id="searchFood"
            placeholder="ENTER FOOD" 
            onChange={this.props.searchfood}
          ></input>
        </form>
      </div>
    )
  }
}
