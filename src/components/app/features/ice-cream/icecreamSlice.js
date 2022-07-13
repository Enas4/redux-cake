import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cakes/cakeSlice";

const initialState = {
  numberOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecream--;
    },
    restocked: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(cakeOrdered, (state) => {
      state.numberOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
