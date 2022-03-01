import './App.css'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import PizzaContainer from './Components/PizzaContainer'
import BurgerContainer from './Components/BurgerContainer'
import HookPizzaContainer from './Components/HookPizzaContainer'
import HookburgerContainer from './Components/HookBurgerContainer'
import PlayerContainer from './Components/PlayerContainer'
import ClassPlayerContainer from './Components/ClassPlayerContainer'
import ItemContainer from './Components/ItemContainer'
import ItemContainer2 from './Components/ItemContainer2'

function App () {
  return (
    <div>
      <Provider store={store}>
        {/* Conditionally running map state and dispatch Props */}
        {/* Using Class Component */}
        {/* <ItemContainer2 pizza/>
        <ItemContainer2 /> */}
        
        {/* Using Functional Component */}
        {/* <ItemContainer pizza /> */}
        {/* <ItemContainer /> */}

        {/* async api call with redux Practice */}
        {/* <ClassPlayerContainer /> */}
        {/* <PlayerContainer /> */}

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
