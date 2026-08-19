import React from "react";

const Usuarios = ({ usuario, activo }) => {
  return (
    <div>
      <li>nombre: {usuario}</li>
      <li>{activo ? "Activo" : "Inactivo"}</li>
    </div>
  );
};

export default Usuarios;
