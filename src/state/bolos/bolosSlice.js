import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   nrBolos: 10,
};

const bolosSlice = createSlice({
   name: "bolos",
   initialState,
   reducers: {
      comprarBolo: (state) => {
         state.nrBolos -= 1;
      },
      adicionarBolo: (state, action) => {
        state.nrBolos += action.payload
      }
   },
});

export const { comprarBolo, adicionarBolo } = bolosSlice.actions;

export default bolosSlice.reducer;
