import { FETCH_PLAYER_REQUEST, FETCH_PLAYER_SUCCESS, FETCH_PLAYER_FAILURE } from './PlayerActionTypes'

import axios from 'axios'

// Action creator - Basically a function that returns an action object which has type and payload properties
//----------------------------------------------------------------------------------------------------------
export const fetchPlayersRequest = () => {
  return {
    type: FETCH_PLAYER_REQUEST
  }
}

export const fetchPlayersSucess = (players) => {
  return {
    type: FETCH_PLAYER_SUCCESS,
    payload: players
  }
}

export const fetchPlayersFailure = (error) => {
  return {
    type: FETCH_PLAYER_FAILURE,
    payload: error
  }
}

// Action creator with thunk-middleware functinalities
//----------------------------------------------------
export const fetchPlayers = () => {
  
  return async function (dispatch) {

    dispatch(fetchPlayersRequest())

    await axios
      .get('http://localhost:9191/api/player/show-all-players')
      .then(response => {
        // response.data is tht array of players
        dispatch(fetchPlayersSucess(response.data))
      })
      .catch(error => {
        // error.message is error description
        dispatch(fetchPlayersFailure(error.message))
      })
  }
}

