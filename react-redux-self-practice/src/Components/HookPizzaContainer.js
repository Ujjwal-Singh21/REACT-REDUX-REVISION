import React from 'react'
import { buyPizza } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function HookPizzaContainer () {
  const noOfPizzas = useSelector(state => state.pizza.noOfPizzas)
  const dispatch = useDispatch()
  return (
    <div>
      <h2> HookPizzaContainer </h2>
      <h3> No of Pizzas (Hooks) - {noOfPizzas} </h3>
      <button onClick={() => dispatch(buyPizza(10))}> Buy Your Pizza </button>
    </div>
  )
}

export default HookPizzaContainer
