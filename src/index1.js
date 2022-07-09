// const redux = require("redux");
// const bind = redux.bindActionCreators;
// const createStore = redux.createStore;
// const logger = reduxLogger.createLogger();
// const reduxLogger = require('redux-logger')
// const combineReducers = redux.combineReducers
// const applyMiddleware = redux.applyMiddleware;

// -----------ACTION-----------
// const CAKE_ORDERED = "CAKE_ORDERED";
// const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// const orderedCake = () => {
//   return {
//     type: CAKE_ORDERED,
//     payload: 1,
//   };
// };

// const orderedIcecream = () => {
//   return {
//     type: ICECREAM_ORDERED,
//     payload: 1,
//   };
// };

// const cakeRestored = (qty = 1) => {
//   return {
//     type: CAKE_RESTOCKED,
//     payload: qty,
//   };
// };
// // -----------ACTION-----------

// //  ----------STATE OF REDUCER----------------
// const cakeState = () => {
//   return {
//     numOfCake: 10,
//   };
// };

// const icecreamState = () => {
//   return {
//     numOficecream: 20,
//   };
// };
// //  ----------STATE OF REDUCER----------------

// // --------------REDUCER--------------------

// const cakeReducer = (state = cakeState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         numOfCake: state.numOfCake + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const icecreamReducer = (state = icecreamState, action) => {
//          switch(action.type){
//            case ICECREAM_ORDERED:
//              return{
//                numOficecream: state.numOficecream - 1;
//              }
//              default: return state;
//          }
// }
// // --------------REDUCER--------------------

// // --------------STORE-------------
// const rootStore = combineReducers({
//   cake: cakeReducer,
//   icecream: icecreamReducer
// })
// const store = createStore(rrotstore, applyMiddleware(logger));
// console.log("initial state", store.getState());

// const unsubscribe = store.subscribe(() =>

// );

// store.dispatch(orderedCake());
// store.dispatch(orderedCake());
// store.dispatch(orderedCake());
// store.dispatch(cakeRestored(3));

// unsubscribe();

// //OR

// const actions = bind({ orderedCake, cakeRestored }, store.dispatch);
// actions.orderedCake(3);
// actions.cakeRestored(2);
// // --------------STORE-------------
