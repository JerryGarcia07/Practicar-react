import "./App.css";
import Contrasena from "./components/Contrasena";
import FormulariosBasico from "./components/FormulariosBasico";
import ValidarCorreo from "./components/ValidarCorreo";
import ValidarEdad from "./components/ValidarEdad";
import VariosCampos from "./components/VariosCampos";

function App() {
  return (
    <>
      <h1>Formularios</h1>
      <hr />
      <FormulariosBasico />
      <hr />
      <VariosCampos />
      <hr />
      <ValidarEdad />
      <hr />
      <ValidarCorreo />
      <hr />
      <Contrasena />
    </>
  );
}

export default App;
