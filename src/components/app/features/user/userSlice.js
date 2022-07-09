import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import cakeSlice from "../cakes/cakeSlice";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((users) => users.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
