import React from "react";
import Productos from "./Productos";

const ListaProductos = () => {
  const productos = [
    {
      nombre: "Laptop",
      precio: 3500,
      stock: 3,
    },
    {
      nombre: "Mouse",
      precio: 80,
      stock: 10,
    },
  ];

  const productoBase = {
    moneda: "PEN",
    disponible: true,
  };

  let nuevoProducto = productos.map((prod) => ({ ...prod, ...productoBase }));
  console.log(nuevoProducto);

  return (
    <>
      {nuevoProducto.map((producto, index) => (
        <Productos
          key={index}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          moneda={producto.moneda}
          disponible={producto.disponible}
        />
      ))}
    </>
  );
};

export default ListaProductos;
