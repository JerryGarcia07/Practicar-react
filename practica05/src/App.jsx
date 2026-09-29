import "./App.css";
import Checkbox from "./components/Checkbox";
import Contrasena from "./components/Contrasena";
import FormularioCompleto from "./components/FormularioCompleto";
import FormulariosArray from "./components/FormulariosArray";
import FormulariosBasico from "./components/FormulariosBasico";
import FormulariosObjetos from "./components/FormulariosObjetos";
import MostrarErrores from "./components/MostrarErrores";
import MostrarProductos from "./components/MostrarProductos";
import RadioButtons from "./components/RadioButtons";
import Select from "./components/Select";
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
      <hr />
      <FormularioCompleto />
      <hr />
      <MostrarErrores />
      <hr />
      <Select />
      <hr />
      <Checkbox />
      <hr />
      <RadioButtons />
      <hr />
      <FormulariosObjetos />
      <hr />
      <FormulariosArray />
      <hr />
      <MostrarProductos />
    </>
  );
}

export default App;
