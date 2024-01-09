import { configureStore } from "@reduxjs/toolkit";
import bolosReducer from "./bolos/bolosSlice";

/* // Primeiro método mais simples é criar um único reducer global
const stateInicial = {
   nrBolos: 10,
};

const reducer = (state = stateInicial, action) => {
   switch (action.type) {
      case "COMPRAR_BOLO":
         return { ...state, nrBolos: state.nrBolos > 0 ? state.nrBolos - 1 : 0 };
      default:
         return state;
   }
};
*/

// Segundo método é utilizando mais de um reducer(Slices) para casos mais complexos
const store = configureStore({
   reducer: { bolos: bolosReducer },
});

export default store;
