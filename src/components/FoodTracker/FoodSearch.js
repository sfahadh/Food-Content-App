import React, { Component } from 'react'

export default class FoodSearch extends Component {


  render() {

    return (
      <div>
        <form>
          <input 
            placeholder="ENTER FOOD" 
            onChange={this.props.searchfood}
          ></input>
        </form>
      </div>
    )
  }
}
