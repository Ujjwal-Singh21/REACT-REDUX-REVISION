import { BUY_BURGER } from './BurgerActionTypes'

const initialState = {
  noOfBurgers: 125
}

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BURGER:
      return {
        ...state,
        noOfBurgers: state.noOfBurgers - action.payload
      }

    default:
      return state
  }
}

export default burgerReducer
