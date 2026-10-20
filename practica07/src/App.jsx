import { useState } from "react";

import "./App.css";
import ObtenerUsuarios from "./components/ObtenerUsuarios";
import APICondicional from "./components/APICondicional";
import BuscarUsuario from "./components/BuscarUsuario";
import PostsUsuario from "./components/PostsUsuario";
import SeleccionarUsuario from "./components/SeleccionarUsuario";
import UsuarioFormulario from "./components/UsuarioFormulario";
import FormularioAPI from "./components/FormularioAPI";
import BuscarPostsUsuario from "./components/BuscarPostsUsuario.jsx";
import Mostrar5Posts from "./components/Mostrar5Posts.jsx";

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
      {/* <SeleccionarUsuario />
      <hr />
      <UsuarioFormulario /> */}
      {/* <FormularioAPI /> */}
      {/* <BuscarPostsUsuario /> */}
      <Mostrar5Posts />
    </>
  );
}

export default App;
