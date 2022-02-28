import React from 'react'
import { buyPizza } from '../Redux'
import { connect } from 'react-redux'

function PizzaContainer ({ noOfPizzas, buyPizza }) {
  return (
    <div>
      <h2> Pizza Container </h2>
      <h3> No of Pizzas - {noOfPizzas} </h3>
      <button type='button' onClick={() => buyPizza(2)}>
        Buy Your Pizza
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noOfPizzas: state.pizza.noOfPizzas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPizza: (data) => dispatch(buyPizza(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer)
