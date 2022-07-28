const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const applyMiddleWare = redux.applyMiddleware
const createStore = redux.createStore

// Action Types
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// Action Creators
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

const fetchPostsSucess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

// Initial State for reducer
const initialState = {
  loading: false,
  posts: [],
  error: ''
}

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      }
  }
}

// Redux Store
const store = createStore(reducer, applyMiddleWare(thunkMiddleware))

// Subscribe to Store
const unSubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Functionality of using thunkMiddleware are as follows:
// Allows an action creator to return a function instead of an action object.
// Also allows that function to accept dispatch function from store as its parameter and dispatch the appropriate actions by calling action creators.
// That function need not to be pure and also cause sideEffects and make api calls.

const fetchPosts = () => {
  
  return function (dispatch) {
    dispatch(fetchPostsRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // response.data is array of posts
        const title = response.data.map(post => post.title)
        dispatch(fetchPostsSucess(title))
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchPostsFailure(error.message))
      })
  }
}

store.dispatch(fetchPosts())
