import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cakes/cakeSlice";
import icecreamReducer from "./features/ice-cream/icecreamSlice";
import userReducer from "../app/features/user/userSlice";
// import cakeSlice from "./features/cakes/cakeSlice";
// import logger, { createLogger } from "redux-logger";

// const reduxLogger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(reduxLogger),
});

export default store;
