import "./App.css";
import Empelado from "./components/Empelado";
import ListProducto from "./components/ListProducto";
import ListUsuario from "./components/ListUsuario";
import Saludo from "./components/Saludo";

function App() {
  return (
    <>
      <Saludo name={"Carlos"} edad={15} ciudad={"Lima"} activo={true} />
      <Empelado nombre="Carlos" cargo="Soporte TI" sueldo={2500} />
      <ListUsuario />
      <ListProducto />
    </>
  );
}

export default App;
