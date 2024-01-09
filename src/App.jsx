import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
   // Apanhando o estado no store do redux
   const nr_bolos = useSelector((state) => state.nrBolos);
   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Aprendendo Redux</h1>
         <p>Número de bolos na loja {nr_bolos}</p>
         <button onClick={() => dispatch({ type: "COMPRAR_BOLO" })} style={{ color: "red" }}>
            Comprar bolo
         </button>
      </div>
   );
}

export default App;
