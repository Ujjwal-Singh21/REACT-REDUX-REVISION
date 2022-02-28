import React from 'react'
import { buyBurger } from '../Redux'
import { connect } from 'react-redux'

function BurgerContainer ({ noOfBurgers, buyBurger }) {
  return (
    <div>
      <h2> Burger Container </h2>
      <h3> No of Burgers - {noOfBurgers} </h3>
      <button type='button' onClick={() => buyBurger(4)}>
        Buy Your Burger
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noOfBurgers: state.burger.noOfBurgers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBurger: (data) => dispatch(buyBurger(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer)
