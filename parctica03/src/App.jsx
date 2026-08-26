import "./App.css";
import AgregarLista from "./components/AgregarLista";
import Imputsc from "./components/Imputs";
import ListaNombre from "./components/ListaNombre";
import ListProducto from "./components/ListProducto";
import Mostrar from "./components/Mostrar";
import Password from "./components/Password";
import Suma from "./components/Suma";
import Usuarios from "./components/Usuarios";
import UsuariosObjetos from "./components/UsuariosObjetos";

function App() {
  return (
    <>
      <Suma />
      <hr />
      <Mostrar />
      <hr />
      <Usuarios />
      <hr />
      <Imputsc />
      <hr />
      <Password />
      <hr />
      <ListaNombre />
      <hr />
      <AgregarLista />
      <hr />
      <UsuariosObjetos />
      <hr />
      <ListProducto />
    </>
  );
}

export default App;
