import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlayers } from '../Redux'

class ClassPlayerContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.dispatch(fetchPlayers())
  }

  render () {
    const { playerData } = this.props
    return (
      <div>
        <h2> Player Container Class Component </h2>
        {
          playerData.loading ? 'Loading' : playerData.error ? 
          <h3> {playerData.error} </h3> :
          playerData && playerData.players && 
          playerData.players.map(player => {
              return(
                  <ul type='square' key={player.playerJerseyNumber}>
                      <li> {player.playerJerseyNumber} </li>
                      <li> {player.playerName} </li>
                      <li> {player.playerRuns} </li>
                      <li> {player.playerCountry} </li>
                  </ul>
              )
          })
      }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    playerData: state.player
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: () => dispatch(fetchPlayers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassPlayerContainer)
