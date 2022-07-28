import { BUY_PIZZA } from './PizzaActionTypes'

const initialState = {
  noOfPizzas: 50
}

const pizzaReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case BUY_PIZZA:
      return {
        ...state,
        noOfPizzas: state.noOfPizzas - action.payload
      }

      default:
        return state
  }
}

export default pizzaReducer
