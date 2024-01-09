import { configureStore } from "@reduxjs/toolkit";

function comprarBolo() {
   return {
      type: "COMPRAR_BOLO",
      info: "Ação para comprar o bolo",
   };
}

const stateInicial = {
   nrBolos: 10,
};

const reducer = (state = stateInicial, action) => {
   switch (action.type) {
      case "COMPRAR_BOLO":
         return { ...state, nrBolos: state.nrBolos - 1 };
      default:
         return state;
   }
};

const store = configureStore({
   reducer: reducer,
});

export default store;
