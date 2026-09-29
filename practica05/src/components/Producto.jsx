import React from "react";

const Producto = (produc) => {
  console.log(produc.produc);
  const { nombre, precio, stock, categoria, eliminar } = produc.produc;
  return (
    <li>
      Nombre: {nombre} - Precio: {precio} - Stock: {stock} - Categoria:{" "}
      {categoria}
      <button onClick={() => eliminar(nombre)}>Eliminar</button>
    </li>
  );
};

export default Producto;
