// const redux = require("redux");
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunkMiddleware = require("redux-thunk").default;
// const axios = require("axios");

// const initialState = {
//   loading: false,
//   user: [],
//   error: "",
// };

// const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
// const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
// const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };

// const fetchUsersSuccess = (users) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: users,
//   };
// };

// const fetchUsersFailure = (error) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     payload: error,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         loading: false,
//         user: action.payload,
//         error: "",
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         loading: false,
//         user: [],
//         error: action.payload,
//       };
//   }
// };

// const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };
// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(fetchUsers());
