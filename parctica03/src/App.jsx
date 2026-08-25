import "./App.css";
import Imputsc from "./components/Imputs";
import Mostrar from "./components/Mostrar";
import Suma from "./components/Suma";
import Usuarios from "./components/Usuarios";

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
    </>
  );
}

export default App;
