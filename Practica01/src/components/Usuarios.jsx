import React from "react";

const Usuarios = () => {
  const usuario = {
    nombre: "Carlos",
    edad: 28,
  };

  let ciudades = {
    ...usuario,
    ciudad: "Lima",
  };

  let { nombre, edad } = usuario;
  return (
    <div>
      <p>Nombre: {ciudades.nombre}</p>
      <p> Edad: {ciudades.edad}</p>
      <p> Profesión: {ciudades.ciudad}</p>
    </div>
  );
};

export default Usuarios;
