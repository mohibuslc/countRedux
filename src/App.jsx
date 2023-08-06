
// App.js Modifi 

// import Counter from "./components/Counter";
import DynamicCounter from "./components/Dynamic/DynamicCounter";
import HookSelector from "./components/Hooks/HookSelector";

import store from "./components/redux/store"
import { Provider } from "react-redux";
import Variable from "./dynamicVariable/Variable";
import Counter from "./components/Counter";

function App() {
 

  return (

    <Provider store={store}>
   <div>
    {/* <Counter id='1' /> */}

 <HookSelector/>
 <DynamicCounter/>
 <Counter />
 <Variable dynamic />
 

   </div>

   </Provider>
  )
}

export default App
