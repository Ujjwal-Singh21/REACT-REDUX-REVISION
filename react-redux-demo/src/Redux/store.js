import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import cakeReducer from './Cake/cakeReducer'
import rootReducer from './RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
