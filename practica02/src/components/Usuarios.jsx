import React from "react";

const Usuarios = ({ usuario }) => {
  return (
    <div>
      <li>nombre: {usuario.nombre}</li>
      <li>edad: {usuario.edad}</li>
      <li>ciudad: {usuario.ciudad}</li>
    </div>
  );
};

export default Usuarios;
