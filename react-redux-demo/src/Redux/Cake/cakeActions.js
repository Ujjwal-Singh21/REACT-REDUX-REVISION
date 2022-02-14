import { BUY_CAKE } from './cakeTypes'

// export function buyCake () {
//   return {
//     type: BUY_CAKE
//   }
// }

export function buyCake (number = 1) {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
