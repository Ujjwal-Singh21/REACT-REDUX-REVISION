import { BUY_BURGER } from './BurgerActionTypes'

export const buyBurger = (data) => {
  return {
    type: BUY_BURGER,
    payload: data
  }
}
