import React from "react";
import Productos from "./Productos";

const ListProducto = () => {
  const productos = [
    {
      nombre: "Laptop",
      precio: 3500,
      stock: 10,
    },
    {
      nombre: "Mouse",
      precio: 80,
      stock: 0,
    },
    {
      nombre: "Monitor",
      precio: 900,
      stock: 5,
    },
  ];

  let data = productos.reduce((prev, current) => prev + current.precio, 0);
  data = data / productos.length;
  return (
    <div>
      {productos.map((prod, index) => (
        <Productos
          key={index}
          nombre={prod.nombre}
          precio={prod.precio}
          stock={prod.stock}
        />
      ))}
      <hr />
      {productos
        .filter((prod) => prod.precio > 500)
        .map((pro, index) => (
          <Productos nombre={pro.nombre} precio={pro.precio} key={index} />
        ))}
      <hr />
      {productos.map((prod, index) => (
        <Productos key={index} nombre={prod.nombre} />
      ))}
      <hr />
      <h2>{data}</h2>
    </div>
  );
};

export default ListProducto;
