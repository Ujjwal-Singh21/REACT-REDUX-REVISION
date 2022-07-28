import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlayers } from '../../Redux'

function HookPlayerContainer () {

  const playerData = useSelector((state) => state.player)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])

  return (
    <div>
      <h2> Player Container Fn Component </h2>
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

export default HookPlayerContainer
