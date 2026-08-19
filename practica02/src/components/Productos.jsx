import React from "react";

const Productos = ({ nombre, precio, stock }) => {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Precio: {precio}</p>
      <p>{stock > 0 ? "Disponible" : "Agotado"}</p>
    </div>
  );
};

export default Productos;
