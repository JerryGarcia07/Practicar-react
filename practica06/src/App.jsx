import { useState } from "react";

import "./App.css";
import MayorEdad from "./components/MayorEdad";
import UsuarioConectado from "./components/UsuarioConectado";
import MostrarOcultar from "./components/MostrarOcultar";
import EstadoConexión from "./components/EstadoConexión";
import Stock from "./components/Stock";
import EstadoPedido from "./components/EstadoPedido";
import Calificacion from "./components/Calificacion";
import Temperatura from "./components/Temperatura";
import NivelBateria from "./components/NivelBateria";
import ListaVacia from "./components/ListaVacia";
import ListaProductos from "./components/ListaProductos";
import Usuarios from "./components/Usuarios";
import FormularioLogin from "./components/FormularioLogin";
import FormularioErrores from "./components/FormularioErrores";
import ErroresUnicamente from "./components/ErroresUnicamente.jsx";

function App() {
  return (
    <>
      <h1>Renderizado condicional</h1>
      <MayorEdad />
      <hr />
      <UsuarioConectado />
      <hr />
      <MostrarOcultar />
      <hr />
      <EstadoConexión />
      <hr />
      <Stock />
      <hr />
      <EstadoPedido />
      <hr />
      <Calificacion />
      <hr />
      <Temperatura />
      <hr />
      <NivelBateria />
      <hr />
      <ListaVacia />
      <hr />
      <ListaProductos />
      <hr />
      <Usuarios />
      <hr />
      <FormularioLogin />
      <hr />
      <FormularioErrores />
      <hr />
      <ErroresUnicamente />
    </>
  );
}

export default App;
