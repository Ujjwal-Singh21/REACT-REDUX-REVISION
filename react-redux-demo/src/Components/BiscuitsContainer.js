import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyBiscuits } from '../Redux'

function BiscuitsContainer (props) {

  const { noOfBiscuits, buyBiscuits } = props

  const [number, setNumber] = useState(1)

  return (
    <div>
      <h1> No of Biscuits - {noOfBiscuits} </h1>

      <input
        type='text'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <button onClick={() => buyBiscuits(number)}>
        Buy {noOfBiscuits} Biscuits
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    noOfBiscuits: state.biscuits.noOfBiscuits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBiscuits: (number) => dispatch(buyBiscuits(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BiscuitsContainer)
