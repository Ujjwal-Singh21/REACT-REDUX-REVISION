import React from 'react'
import { buyCake } from '../Redux'
import { useSelector, useDispatch } from 'react-redux'

function HookCakeContainer () {
    
  // normal
  //---------
  //   const noOfCakes = useSelector((state) => {
  //      return state.noOfCakes
  //   })

  // minimized
  // ----------
  const noOfCakes = useSelector(state => state.cake.noOfCakes)

  const dispatch = useDispatch()

  return (
    <div>
      <h3> Number Of Cakes (Hooks) - {noOfCakes} </h3>
      <button onClick={() => dispatch(buyCake())}> Buy Cake </button>
    </div>
  )
}

export default HookCakeContainer
