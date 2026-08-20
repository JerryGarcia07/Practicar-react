import "./App.css";
import Boton from "./components/Boton";
import Calculadora from "./components/Calculadora";
import Empelado from "./components/Empelado";
import ListProducto from "./components/ListProducto";
import ListUsuario from "./components/ListUsuario";
import Saludo from "./components/Saludo";

function App() {
  const saludar = () => {
    console.log("Hola");
  };

  const sumar = (a, b) => {
    return a + b;
  };
  return (
    <>
      <Saludo name={"Carlos"} edad={15} ciudad={"Lima"} activo={true} />
      <Empelado nombre="Carlos" cargo="Soporte TI" sueldo={2500} />
      <ListUsuario />
      <ListProducto />
      <Boton saludar={saludar} />
      <Calculadora suma={sumar} />
    </>
  );
}

export default App;
