import "./App.css";
import Aumentos from "./components/Aumentos";
import Button from "./components/Button";
import Colores from "./components/Colores";
import Input from "./components/input";
import Usuario from "./components/Usuario";
import ValidarEdad from "./components/ValidarEdad";
import ValidarNombre from "./components/ValidarNombre";
import ValidarPassword from "./components/ValidarPassword";

function App() {
  return (
    <>
      <Button />
      <hr />
      <Aumentos />
      <hr />
      <Usuario />
      <hr />
      <Colores />
      <hr />
      <Input />
      <hr />
      <ValidarNombre />
      <hr />
      <ValidarEdad />
      <hr />
      <ValidarPassword />
    </>
  );
}

export default App;
