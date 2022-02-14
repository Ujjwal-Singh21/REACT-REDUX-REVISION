import cakeReducer from './Cake/cakeReducer'
import iceCreamReducer from './IceCream/IceCreamReducer'
import biscuitsReducer from './Biscuits/biscuitsReducer'
import userReducer from './User/UserReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  biscuits: biscuitsReducer,
  user: userReducer
})

export default rootReducer
