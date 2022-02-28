import './App.css'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import PizzaContainer from './Components/PizzaContainer'
import BurgerContainer from './Components/BurgerContainer'
import HookPizzaContainer from './Components/HookPizzaContainer'
import HookburgerContainer from './Components/HookBurgerContainer'
import PlayerContainer from './Components/PlayerContainer'

function App () {
  return (
    <div>
      <Provider store={store}>
        {/* async api call with redux Practice */}
        <PlayerContainer />

        {/* With useSelector and useDispatch Hooks  */}
        {/* <HookPizzaContainer />
        <HookburgerContainer /> */}

        {/* Without Hooks using Map State and dispatch to Props  */}
        {/* <PizzaContainer />
        <BurgerContainer /> */}
      </Provider>
    </div>
  )
}

export default App
