import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { adicionarBolo, comprarBolo } from "./state/bolos/bolosSlice";

function App() {
   // Apanhando o estado no store do redux
   const nr_bolos = useSelector((state) => state.bolos.nrBolos);
   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Aprendendo Redux</h1>
         <p>Número de bolos na loja {nr_bolos}</p>
         <button
            onClick={() => {
               dispatch(comprarBolo());
            }}
         >
            Comprar bolo
         </button>

         <button onClick={()=> {
            dispatch(adicionarBolo(1))
         }} >Adicionar bolos</button>
      </div>
   );
}

export default App;
