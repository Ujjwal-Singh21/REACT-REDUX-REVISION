import { BUY_PIZZA } from './PizzaActionTypes'

export const buyPizza = (data) => {
  return {
    type: BUY_PIZZA,
    payload: data
  }
}
