import React from "react";
import Usuarios from "./Usuarios";

const ListUsuario = () => {
  const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false },
    { nombre: "Pedro", activo: true },
  ];
  return (
    <div>
      {usuarios.map((user, index) => (
        <Usuarios usuario={user.nombre} key={index} activo={user.activo} />
      ))}
    </div>
  );
};

export default ListUsuario;
