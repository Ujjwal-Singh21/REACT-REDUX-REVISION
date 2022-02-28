import pizzaReducer from './Pizza/PizzaReducer'
import burgerReducer from './Burger/BurgerReducer'
import playerReducer from './Player/PlayerReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  player: playerReducer
})

export default rootReducer