import './App.css'
import CakeContainer from './Components/CakeContainer'
import { Provider } from 'react-redux'
import store from './Redux/store'
import HookCakeContainer from './Components/HookCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import HookIceCreamContainer from './Components/HookIceCreamContainer'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'
import BiscuitsContainer from './Components/BiscuitsContainer'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>

        {/* <UserContainer /> */}

        {/* <BiscuitsContainer /> */}
        {/* <CakeContainer />
        <IceCreamContainer /> */}

        {/* <HookCakeContainer />
        <HookIceCreamContainer /> */}

         {/* <ItemContainer cake />
        <ItemContainer />  */}
      </div>
    </Provider>
  )
}

export default App
