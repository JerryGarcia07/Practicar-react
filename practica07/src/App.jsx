import { useState } from "react";

import "./App.css";
import ObtenerUsuarios from "./components/ObtenerUsuarios";
import APICondicional from "./components/APICondicional";
import BuscarUsuario from "./components/BuscarUsuario";
import PostsUsuario from "./components/PostsUsuario";

function App() {
  return (
    <>
      <h1>useEffect + APIs + fetch</h1>
      {/* <ObtenerUsuarios />
      <hr />
      <APICondicional /> */}
      <hr />
      {/* <BuscarUsuario /> */}
      <PostsUsuario />
    </>
  );
}

export default App;
