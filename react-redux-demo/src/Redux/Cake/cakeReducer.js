import { BUY_CAKE } from './cakeTypes'

const initialState = {
  noOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        // noOfCakes: state.noOfCakes - 1
        noOfCakes: state.noOfCakes - action.payload
      }
    default:
      return state
  }
}

export default cakeReducer
