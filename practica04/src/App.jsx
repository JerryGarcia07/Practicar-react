import "./App.css";
import ActualizarEstados from "./components/ActualizarEstados";
import Aumentos from "./components/Aumentos";
import Button from "./components/Button";
import Colores from "./components/Colores";
import Input from "./components/input";
import ListaEventos from "./components/ListaEventos";
import PrimerFormulario from "./components/PrimerFormulario";
import UnEstado from "./components/UnEstado";
import Usuario from "./components/Usuario";
import ValidarEdad from "./components/ValidarEdad";
import ValidarNombre from "./components/ValidarNombre";
import ValidarPassword from "./components/ValidarPassword";
import VariosEstados from "./components/VariosEstados";

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
      <hr />
      <PrimerFormulario />
      <hr />
      <VariosEstados />
      <hr />
      <UnEstado />
      <hr />
      <ActualizarEstados />
      <hr />
      <ListaEventos />
    </>
  );
}

export default App;
