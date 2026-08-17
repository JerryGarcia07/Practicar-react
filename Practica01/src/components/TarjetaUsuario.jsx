import React from "react";

const TarjetaUsuario = ({ nombre, ciudad, edad }) => {
  return (
    <div>
      <p>Nombre: {nombre} </p>
      <p>Ciudad: {ciudad}</p>
      <p>Edad: {edad}</p>
    </div>
  );
};

export default TarjetaUsuario;
