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
    </>
  );
}

export default App;
