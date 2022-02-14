const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

const BUY_CAKE = 'BUY-CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

{
  type: BUY_CAKE
  info: 'First reudx action'
}

// action creator - its a function that returns an action.
function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First reudx action'
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM,
    info: 'First reudx action'
  }
}

// FIRST MAKING SINGLE STATE OBJECT TO PASS AS 1st ARGUMENT TO REDUCER
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// NOW MAKING OUR REDUCER AS AN ARROW FUNCTION
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }

//     default:
//       return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }

    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger))
console.log('Intial State', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
