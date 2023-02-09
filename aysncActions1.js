const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware

//state
const initialState = {
  loading: false,
  users: [],
  error: ''
}

//action constants/types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// action creators
function fetchUsersRequest () {
  return {
    type: FETCH_USERS_REQUEST
  }
}

function fetchUsersSuccess (users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

function fetchUsersFailure (error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }

    default:
      return state
  }
}

// Redux store
const store = createStore(reducer, applyMiddleWare(thunkMiddleware))

// Subscribe to Store
store.subscribe(() => console.log('updated state data', store.getState()))


// Action creator with thunkMiddleware functionality
function fetchUsers () {

  return function (dispatch) {

    dispatch(fetchUsersRequest())

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // response.data is array of users
        const users = response.data.map(user => user.name)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        // error.message is error description
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


store.dispatch(fetchUsers())
