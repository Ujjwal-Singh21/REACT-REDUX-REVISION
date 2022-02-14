import React from 'react'
import { buyCake } from '../Redux'
import { connect } from 'react-redux'

function CakeContainer (props) {
  return (
    <div>
      <h2> Number Of Cakes - {props.noOfCakes} </h2>
      <button onClick={props.buyCake}> Buy Cake </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    //  noOfCakes: state.noOfCakes
    noOfCakes: state.cake.noOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
