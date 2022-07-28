import './App.css'
import ClassPizzaContainer from './Components/Pizza/ClassPizzaContainer'
import HookPizzaContainer from './Components/Pizza/HookPizzaContainer'
import BurgerContainer from './Components/Burger/BurgerContainer'
import HookburgerContainer from './Components/Burger/HookBurgerContainer'
import HookPlayerContainer from './Components/Player/HookPlayerContainer'
import ClassPlayerContainer from './Components/Player/ClassPlayerContainer'
import FnItemContainer from './Components/Item/FnItemContainer'
import ClassItemContainer from './Components/Item/ClassItemContainer'
import { Provider } from 'react-redux'
import { store } from './Redux/store'

function App () {
  return (
    <div>
      <Provider store={store}>

        {/* Conditionally running map state and dispatch Props */}
        {/* Using Class Component */}
        {/* --------------------------------------------------------- */}
        {/* <ClassItemContainer pizza/> */}
        {/* <ClassItemContainer />  */}
        
        {/* Using Functional Component */}
        {/* ----------------------------------- */}
        {/* <FnItemContainer pizza /> */}
        {/* <FnItemContainer /> */}

        {/* async api call with redux Practice */}
        {/* ------------------------------------------ */}
        {/* <ClassPlayerContainer /> */}
        {/* <HookPlayerContainer /> */}

        {/* With useSelector and useDispatch Hooks  */}
        {/* ------------------------------------------------ */}
        {/* <HookPizzaContainer /> */}
        {/* <HookburgerContainer /> */}

        {/* Without Hooks using Map State and dispatch to Props  */}
        {/* --------------------------------------------------------- */}
        {/* <ClassPizzaContainer /> */}
        {/* <BurgerContainer /> */}

      </Provider>
    </div>
  )
}

export default App
