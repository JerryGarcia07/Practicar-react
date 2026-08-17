import React from "react";

const Productos = ({ nombre, precio, stock, moneda, disponible }) => {
  return (
    <div>
      <p>nombre: {nombre} </p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      <p>{stock > 0 ? "Disponible" : "Agotado"}</p>
      <p>moneda: {moneda}</p>
      <p>Disponible: {disponible}</p>
    </div>
  );
};

export default Productos;
