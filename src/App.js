// import store from "./components/app/store.js";
// import cakeActions from "./components/app/features/cakes/cakeSlice";
// import icecreamActions from "./components/app/features/ice-cream/icecreamSlice";
// import fetchUsers from "./components/app/features/user/userSlice";
import CakeView from "./components/app/features/cakes/CakeView";
// import IcecreamView from "./components/app/features/ice-cream/IcecreamView";
import UserView from "./components/app/features/user/UserView";
import { useState } from "react";
// import { Provider } from "react-redux";
// import store from "./components/app/store";

// console.log("initial state", store.getState());
// const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked());

// store.dispatch(fetchUsers());

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));
// unsubscribe();

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Provider store={store}> */}
      <CakeView />
      {/* <IcecreamView /> */}
      <UserView />
      {/* </Provider> */}
    </>
  );
}

export default App;
