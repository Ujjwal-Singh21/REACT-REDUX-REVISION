import React from 'react'
import { buyBurger } from '../../Redux'
import { useSelector, useDispatch } from 'react-redux'

function HookburgerContainer () {

  const noOfBurgers = useSelector(state => state.burger.noOfBurgers)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h2> HookBurgerContainer </h2>
      <h3> No of burgers (Hooks) - {noOfBurgers} </h3>
      <button onClick={() => dispatch(buyBurger(20))}> Buy Your Burger </button>
    </div>
  )
}

export default HookburgerContainer
