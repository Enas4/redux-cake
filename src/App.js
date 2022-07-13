import CakeView from "./components/app/features/cakes/CakeView";
import IcecreamView from "./components/app/features/ice-cream/IcecreamView";
import UserView from "./components/app/features/user/UserView";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  );
}

export default App;
