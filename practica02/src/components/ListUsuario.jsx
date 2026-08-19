import React from "react";
import Usuarios from "./Usuarios";

const ListUsuario = () => {
  const usuario = {
    nombre: "Ana",
    edad: 24,
    ciudad: "Lima",
  };
  return (
    <div>
      <Usuarios usuario={usuario} />
    </div>
  );
};

export default ListUsuario;
