import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyPizza, buyBurger } from '../Redux'

class ItemContainer2 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { item, buyItem } = this.props
    return (
      <div>
        <h2> ItemContainer Class Component - {item} </h2>
        <button onClick={() => buyItem(1)}> Buy Item </button>
      </div>
    )
  }
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
    ? data => dispatch(buyPizza(data))
    : data => dispatch(buyBurger(data))

  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer2)
