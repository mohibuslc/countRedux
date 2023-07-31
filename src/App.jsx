
// App.js Modifi 

// import Counter from "./components/Counter";
import HookSelector from "./components/Hooks/HookSelector";
import store from "./components/redux/store"
import { Provider } from "react-redux";

function App() {
 

  return (

    <Provider store={store}>
   <div>
    {/* <Counter id='1' /> */}

 <HookSelector id="2"/>

   </div>

   </Provider>
  )
}

export default App
