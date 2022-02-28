import {
  FETCH_PLAYER_REQUEST,
  FETCH_PLAYER_SUCCESS,
  FETCH_PLAYER_FAILURE
} from './PlayerActionTypes'

const initialState = {
  loading: false,
  players: [],
  error: ''
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        players: action.payload,
        error: ''
      }

    case FETCH_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        players: [],
        error: action.payload
      }

    default:
      return state
  }
}

export default playerReducer
