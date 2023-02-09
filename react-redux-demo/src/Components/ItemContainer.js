import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux'

function ItemContainer (props) {

  return (
    <div>
      <h2> Item - {props.item} </h2>
      <button onClick={props.buyItem}> Buy Item </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemSet = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCreams

  return {
    item: itemSet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
