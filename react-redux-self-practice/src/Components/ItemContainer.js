import React from 'react'
import { connect } from 'react-redux'
import { buyBurger, buyPizza } from '../Redux'

function ItemContainer ({ item, buyItem}) {
  return (
    <div>
      <h2> Item Container - {item} </h2>
      <button type='button' onClick={() => buyItem(1)}> Buy Item </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemSet = ownProps.pizza
    ? state.pizza.noOfPizzas
    : state.burger.noOfBurgers

  return {
    item: itemSet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.pizza
    ? (data) => dispatch(buyPizza(data))
    : (data) => dispatch(buyBurger(data))

  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
