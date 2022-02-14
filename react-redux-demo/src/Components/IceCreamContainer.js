import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../Redux'

function IceCreamContainer (props) {
  return (
    <div>
      <h2> Number Of IceCreams - {props.noOfIceCreams} </h2>
      <button onClick={props.buyIceCream}> Buy IceCream </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    //noOfIceCreams: state.noOfIceCreams
    noOfIceCreams: state.iceCream.noOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
