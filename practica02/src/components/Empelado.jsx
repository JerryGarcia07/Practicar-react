import React from "react";

const Empelado = ({ nombre, cargo, sueldo }) => {
  return (
    <div>
      <li>Nombre: {nombre}</li>
      <li>Area: {cargo}</li>
      <li>Sueldo: {sueldo}</li>
    </div>
  );
};

export default Empelado;
