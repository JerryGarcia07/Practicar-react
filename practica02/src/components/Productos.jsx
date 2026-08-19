import React from "react";

const Productos = ({ nombre, precio }) => {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default Productos;
