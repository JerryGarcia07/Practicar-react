import React from "react";

const Producto = ({ produc, eliminar }) => {
  const { id, nombre, precio, stock, categoria } = produc;
  return (
    <li>
      Nombre: {nombre} - Precio: {precio} - Stock: {stock} - Categoria:{" "}
      {categoria}
      <button onClick={() => eliminar(id)}>Eliminar</button>
    </li>
  );
};

export default Producto;
