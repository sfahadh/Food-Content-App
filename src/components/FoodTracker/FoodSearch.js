import React, { Component } from 'react'

export default class FoodSearch extends Component {

  // displayTable(table) {
  //   return table;
  // }

  render() {
    const {searchfood, foodNames} = this.props

    // let table = (
    //   <div className="nutrition-content">
    //     <div className="box left">Nutrient</div>
    //     <div className="box">Unit</div>
    //     <div className="box">Weight</div>
    //     <div className="box">Value</div>

    //     <div className="box left">Energy</div>
    //     <div className="box">kcal</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{foodNames[0].weight}</p>})()}</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{foodNames[0].nutrients[0].value}</p>})()}</div>

    //     <div className="box left">Protein</div>
    //     <div className="box">g</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round((foodNames[0].nutrients[1].value)) * 4) / 4}</p>})()}</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round(foodNames[0].nutrients[1].value)) * 4}</p>})()}</div>

    //     <div className="box left">Carbohydrate</div>
    //     <div className="box">g</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round((foodNames[0].nutrients[3].value)) * 4) / 4}</p>})()}</div>
    //     <div className="box">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round(foodNames[0].nutrients[3].value)) * 4}</p>})()}</div>

    //     <div className="box left bottom">Fat</div>
    //     <div className="box bottom">g</div>
    //     <div className="box bottom">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round((foodNames[0].nutrients[2].value)) * 9) / 9}</p>})()}</div>
    //     <div className="box bottom">{(() => {if(foodNames[0] !== undefined) 
    //     return <p>{parseInt(Math.round(foodNames[0].nutrients[2].value)) * 9}</p>})()}</div>
    //   </div>
    // )

    return (
      <div>
        <form>
          <input 
            placeholder="ENTER FOOD" 
            onChange={searchfood}

            ></input>
          {/* <button>SELECT</button> */}
        </form>
      </div>
    )
  }
}
