import { BUY_BISCUITS } from './biscuitsTypes'

export function buyBiscuits (number) {
  return {
    type: BUY_BISCUITS,
    payload: number
  }
}

