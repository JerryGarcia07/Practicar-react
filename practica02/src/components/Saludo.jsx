import React from "react";

const Saludo = ({ name, edad, ciudad, activo }) => {
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <h3>Edad: {edad}</h3>
      <h4>ciudad: {ciudad}</h4>
      <h4>activo: {activo ? "Activo" : "Inactivo"}</h4>
    </div>
  );
};

export default Saludo;
