import { useState } from "react";

import "./App.css";
import ObtenerUsuarios from "./components/ObtenerUsuarios";
import APICondicional from "./components/APICondicional";
import BuscarUsuario from "./components/BuscarUsuario";
import PostsUsuario from "./components/PostsUsuario";
import SeleccionarUsuario from "./components/SeleccionarUsuario";

function App() {
  return (
    <>
      <h1>useEffect + APIs + fetch</h1>
      {/* <ObtenerUsuarios />
      <hr />
      <APICondicional /> */}
      <hr />
      {/* <BuscarUsuario /> */}
      {/* <PostsUsuario /> */}
      <hr />
      <SeleccionarUsuario />
    </>
  );
}

export default App;
