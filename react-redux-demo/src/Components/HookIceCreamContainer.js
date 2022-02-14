import React from 'react'
import { buyIceCream } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function HookIceCreamContainer () {
  const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h3> Number of IceCreams (Hooks) - {noOfIceCreams} </h3>
      <button onClick={() => dispatch(buyIceCream())}> Buy IceCream </button>
    </div>
  )
}

export default HookIceCreamContainer
