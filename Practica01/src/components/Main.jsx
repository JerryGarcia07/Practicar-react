import React from "react";
import Productos from "./Productos";
import TarjetaUsuario from "./TarjetaUsuario";
import Boton from "./Boton";
import ListaProductos from "./ListaProductos";
import ListaAlumnos from "./ListaAlumnos";
import Usuarios from "./Usuarios";

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <TarjetaUsuario key={1} nombre={"Ana"} ciudad={"lima"} edad={15} />
      <TarjetaUsuario key={2} nombre={"jenni"} ciudad={"lima"} edad={25} />
      <TarjetaUsuario key={3} nombre={"jerry"} ciudad={"lima"} edad={29} />
      <hr />
      <Boton name={"Comprar"} />
      <Boton name={"Eliminar"} />
      <Boton name={"Editar"} />
      <Boton name={"Guardar"} />
      <hr />
      <ListaProductos />
      <hr />
      <ListaAlumnos />
      <hr />
      <Usuarios />
    </div>
  );
};

export default Main;
