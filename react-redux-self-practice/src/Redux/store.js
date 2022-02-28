// import pizzaReducer from './Pizza/PizzaReducer'
import rootReducer from './RootReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))
