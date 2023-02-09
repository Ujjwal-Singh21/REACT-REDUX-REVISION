import { BUY_BISCUITS } from './biscuitsTypes'

const initialState = {
  noOfBiscuits: 15
}

const biscuitsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case BUY_BISCUITS:
      return {
        ...state,
        noOfBiscuits: state.noOfBiscuits - action.payload
      }

    default:
      return state
  }
}

export default biscuitsReducer
